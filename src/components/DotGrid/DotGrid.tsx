import React, { useEffect, useRef, useState, useMemo } from 'react';
import './DotGrid.css';

interface Dot {
  x: number;
  y: number;
  opacity: number;
}

interface Position {
  x: number;
  y: number;
}

export const DotGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const mousePos = useRef<Position>({ x: 0, y: 0 });
  const prevMousePos = useRef<Position[]>([]);
  const isHovering = useRef(false);
  const rafRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Constants
  const CONSTANTS = useMemo(() => ({
    GRID_SIZE: 20,
    HOVER_RADIUS: 100,
    MAX_OPACITY: 0.8,
    TRAIL_LENGTH: 3
  }), []);

  // Draw grid lines
  const drawGrid = (context: CanvasRenderingContext2D, width: number, height: number) => {
    context.clearRect(0, 0, width, height);
    
    // Calculate grid offset to center it
    const cols = Math.floor(width / CONSTANTS.GRID_SIZE);
    const rows = Math.floor(height / CONSTANTS.GRID_SIZE);
    const offsetX = (width - (cols * CONSTANTS.GRID_SIZE)) / 2;
    const offsetY = 0;

    context.beginPath();
    context.strokeStyle = 'rgba(128, 128, 128, 0.1)';
    context.lineWidth = 1;

    // Vertical lines
    for (let x = offsetX; x <= width - offsetX; x += CONSTANTS.GRID_SIZE) {
      context.moveTo(x, 0);
      context.lineTo(x, height);
    }

    // Horizontal lines
    for (let y = offsetY; y <= height; y += CONSTANTS.GRID_SIZE) {
      context.moveTo(0, y);
      context.lineTo(width, y);
    }

    context.stroke();
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

  const updateCanvasSize = () => {
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height; // Use rect.height for visible area
    const context = canvas.getContext('2d');
    if (context) {
      drawGrid(context, rect.width, rect.height);
    }
  };

  const updateDots = () => {
    const rect = container.getBoundingClientRect();
    const cols = Math.floor(rect.width / CONSTANTS.GRID_SIZE);
    const rows = Math.floor(container.scrollHeight / CONSTANTS.GRID_SIZE);
    const offsetX = (rect.width - (cols * CONSTANTS.GRID_SIZE)) / 2;

    const newDots: Dot[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newDots.push({
          x: col * CONSTANTS.GRID_SIZE + offsetX + CONSTANTS.GRID_SIZE / 2,
          y: row * CONSTANTS.GRID_SIZE + CONSTANTS.GRID_SIZE / 2,
          opacity: 0
        });
      }
    }
    setDots(newDots);
  };

    const handleResize = () => {
      updateCanvasSize();
      updateDots();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const newPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };

      mousePos.current = newPos;
      prevMousePos.current = [
        newPos,
        ...prevMousePos.current.slice(0, CONSTANTS.TRAIL_LENGTH - 1)
      ];

      if (!isHovering.current) {
        isHovering.current = true;
        animate();
      }
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      prevMousePos.current = [];
      setDots(dots => dots.map(dot => ({ ...dot, opacity: 0 })));
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = undefined;
      }
    };

    const handleScroll = () => {
      updateCanvasSize();
      updateDots();
    };

    const animate = () => {
      if (!isHovering.current) return;

      setDots(prevDots => {
        let changed = false;
        const newDots = prevDots.map(dot => {
          let maxOpacity = 0;
          const { HOVER_RADIUS, MAX_OPACITY, TRAIL_LENGTH } = CONSTANTS;

          for (let i = 0; i < prevMousePos.current.length; i++) {
            const pos = prevMousePos.current[i];
            const dx = pos.x - dot.x;
            const dy = pos.y - dot.y;
            const distSquared = dx * dx + dy * dy;
            
            if (distSquared < HOVER_RADIUS * HOVER_RADIUS) {
              const intensity = 1 - Math.sqrt(distSquared) / HOVER_RADIUS;
              const trailFade = 1 - (i / TRAIL_LENGTH);
              maxOpacity = Math.max(maxOpacity, intensity * trailFade * MAX_OPACITY);
            }
          }

          if (Math.abs(dot.opacity - maxOpacity) > 0.01) {
            changed = true;
            return { ...dot, opacity: maxOpacity };
          }
          return dot;
        });

        return changed ? newDots : prevDots;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    // Initial setup
    handleResize();

    // Event listeners
    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('scroll', handleScroll); // Add scroll listener

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('scroll', handleScroll); // Clean up scroll listener
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [CONSTANTS]);

  return (
    <div className="dot-grid-container" ref={containerRef}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  );
};
