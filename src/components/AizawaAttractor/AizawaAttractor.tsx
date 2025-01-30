import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Tooltip, Text, Box } from '@mantine/core';

interface AizawaAttractorProps {
  params?: {
    a?: number;
    b?: number;
    c?: number;
    d?: number;
    e?: number;
    f?: number;
  };
  noiseFactor?: number;
  wobble?: {
    frequency?: number;
    amplitude?: number;
  };
  particleCounts?: {
    baseActive?: number;
    hoverActive?: number;
    trail?: number;
  };
  color?: string;
  backgroundColor?: string;
}

const DEFAULT_PARAMS = {
  a: 0.95,
  b: 0.7,
  c: 0.6,
  d: 3.5,
  e: 0.25,
  f: 0.1
};

const AizawaAttractor: React.FC<AizawaAttractorProps> = ({
  params = DEFAULT_PARAMS,
  noiseFactor = 0.001,
  wobble = { frequency: 3, amplitude: 0.1 },
  particleCounts = { baseActive: 2000, hoverActive: 4000, trail: 20000 },
  color = '#ffffff',
  backgroundColor = '#000000'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showParams, setShowParams] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    // Set pixel ratio for sharper rendering
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    
    // Convert hex background color to RGB
    const hex = backgroundColor.startsWith('#') ? 
      parseInt(backgroundColor.substring(1), 16) :
      parseInt(backgroundColor.replace(/[^0-9a-f]/gi, ''), 16);
    
    const r = ((hex >> 16) & 0xFF) / 255;
    const g = ((hex >> 8) & 0xFF) / 255;
    const b = (hex & 0xFF) / 255;
    
    renderer.setClearColor(new THREE.Color(r, g, b), 1);
    container.appendChild(renderer.domElement);

    // Particle counts
    const baseActiveParticleCount = particleCounts.baseActive;
    const hoverActiveParticleCount = particleCounts.hoverActive;
    const maxActiveParticleCount = hoverActiveParticleCount;
    const trailParticleCount = particleCounts.trail;

    // Active particles (brighter, larger)
    const activeParticles = new THREE.BufferGeometry();
    const activePositions = new Float32Array(maxActiveParticleCount * 3);
    const activeColors = new Float32Array(maxActiveParticleCount * 3);
    const activeSizes = new Float32Array(maxActiveParticleCount);
    let currentActiveCount = baseActiveParticleCount;

    // Trail particles
    const trailParticles = new THREE.BufferGeometry();
    const trailPositions = new Float32Array(trailParticleCount * 3);
    const trailColors = new Float32Array(trailParticleCount * 3);
    const trailSizes = new Float32Array(trailParticleCount);

    function generateParticleStream(startIdx: number, count: number, positions: Float32Array, colors: Float32Array, sizes: Float32Array, scale = 1.5) {
      // Start particles more centered around origin
      let x = (Math.random() - 0.5) * 0.1;
      let y = (Math.random() - 0.5) * 0.1;
      let z = (Math.random() - 0.5) * 0.1;

      for (let i = 0; i < count; i++) {
        const idx = (startIdx + i) * 3;
        const dt = 0.01;

        // Add small random offsets to create more variation
        const randOffset = 0.025;
        x += (Math.random() - 0.5) * randOffset;
        y += (Math.random() - 0.5) * randOffset;
        z += (Math.random() - 0.5) * randOffset;

        const dx = (z - params.b) * x - params.d * y;
        const dy = params.d * x + (z - params.b) * y;
        const dz = params.c + params.a * z - Math.pow(z, 3) / 3 - (Math.pow(x, 2) + Math.pow(y, 2)) * (1 + params.e * z) + params.f * z * Math.pow(x, 3);

        x += dx * dt;
        y += dy * dt;
        z += dz * dt;

        positions[idx] = x * scale;
        positions[idx + 1] = y * scale;
        positions[idx + 2] = z * scale;

        const hex = parseInt(color.substring(1), 16);
        const r = (hex >> 16) / 255;
        const g = ((hex >> 8) & 0xFF) / 255;
        const b = (hex & 0xFF) / 255;

        colors[idx] = r;
        colors[idx + 1] = g;
        colors[idx + 2] = b;

        sizes[startIdx + i] = 0.04;
      }
    }

    // Initialize particles
    function initializeParticles() {
      const numStreams = 8;
      const particlesPerStream = maxActiveParticleCount / numStreams;

      for (let stream = 0; stream < numStreams; stream++) {
        generateParticleStream(stream * particlesPerStream, particlesPerStream, activePositions, activeColors, activeSizes);
      }

      for (let stream = 0; stream < numStreams; stream++) {
        generateParticleStream(stream * (trailParticleCount/numStreams), trailParticleCount/numStreams, trailPositions, trailColors, trailSizes);
      }
    }

    initializeParticles();

    // Set up geometries with initial particle counts
    activeParticles.setAttribute('position', new THREE.BufferAttribute(activePositions, 3));
    activeParticles.setAttribute('color', new THREE.BufferAttribute(activeColors, 3));
    activeParticles.setAttribute('size', new THREE.BufferAttribute(activeSizes, 1));

    trailParticles.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailParticles.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));
    trailParticles.setAttribute('size', new THREE.BufferAttribute(trailSizes, 1));

    // Update geometry draw range
    activeParticles.setDrawRange(0, currentActiveCount);

    const activeMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const trailMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.2,
      sizeAttenuation: true
    });

    const activeSystem = new THREE.Points(activeParticles, activeMaterial);
    const trailSystem = new THREE.Points(trailParticles, trailMaterial);

    // Offset particle systems to center the visual point cloud
    activeSystem.position.set(0, 2, 0);
    trailSystem.position.set(0, 2, 0);

    // Ensure group is centered
    const group = new THREE.Group();
    group.position.set(0, 0, 0);

    // Adjust camera to better frame the centered group
    camera.position.set(0, 6, 10);
    camera.lookAt(0, 2, 0);
    camera.up.set(0, 1, 0);

    group.add(activeSystem);
    group.add(trailSystem);
    scene.add(group);

    const NORMAL_SPEED = 0.001;
    const HOVER_SPEED = 0.005;
    
    let time = 0;
    let currentSpeed = NORMAL_SPEED;
    let targetSpeed = NORMAL_SPEED;

    function handleMouseEnter() {
      setIsHovering(true);
      targetSpeed = HOVER_SPEED;
      setShowParams(true);
    }

    function handleMouseLeave() {
      setIsHovering(false);
      targetSpeed = NORMAL_SPEED;
      setShowParams(false);
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);

    function updateParticles() {
      // Smoothly interpolate to target speed
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;
      const dt = currentSpeed;

      // Add randomness to particle positions
      for (let i = 0; i < maxActiveParticleCount; i++) {
        const idx = i * 3;
        let x = activePositions[idx] / 2;
        let y = activePositions[idx + 1] / 2;
        let z = activePositions[idx + 2] / 2;

        const dx = (z - params.b) * x - params.d * y;
        const dy = params.d * x + (z - params.b) * y;
        const dz = params.c + params.a * z - Math.pow(z, 3) / 3 - (Math.pow(x, 2) + Math.pow(y, 2)) * (1 + params.e * z) + params.f * z * Math.pow(x, 3);

        activePositions[idx] = (x + dx * dt + (Math.random() - 0.5) * noiseFactor) * 2;
        activePositions[idx + 1] = (y + dy * dt + (Math.random() - 0.5) * noiseFactor) * 2;
        activePositions[idx + 2] = (z + dz * dt + (Math.random() - 0.5) * noiseFactor) * 2;

        activeSizes[i] = 0.02 * (1 + Math.sin(time * 4 + i) * 0.3);
      }

      for (let i = 0; i < trailParticleCount; i++) {
        const idx = i * 3;
        let x = trailPositions[idx] / 2;
        let y = trailPositions[idx + 1] / 2;
        let z = trailPositions[idx + 2] / 2;

        const dx = (z - params.b) * x - params.d * y;
        const dy = params.d * x + (z - params.b) * y;
        const dz = params.c + params.a * z - Math.pow(z, 3) / 3 - (Math.pow(x, 2) + Math.pow(y, 2)) * (1 + params.e * z) + params.f * z * Math.pow(x, 3);

        trailPositions[idx] = (x + dx * dt * 0.2) * 2;
        trailPositions[idx + 1] = (y + dy * dt * 0.2) * 2;
        trailPositions[idx + 2] = (z + dz * dt * 0.2) * 2;
      }

      if (isHovering && currentActiveCount < hoverActiveParticleCount) {
        currentActiveCount = Math.min(hoverActiveParticleCount, currentActiveCount + 50);
        activeParticles.setDrawRange(0, currentActiveCount);
      } else if (!isHovering && currentActiveCount > baseActiveParticleCount) {
        currentActiveCount = Math.max(baseActiveParticleCount, currentActiveCount - 50);
        activeParticles.setDrawRange(0, currentActiveCount);
      }

      activeParticles.attributes.position.needsUpdate = true;
      activeParticles.attributes.size.needsUpdate = true;
      trailParticles.attributes.position.needsUpdate = true;
    }

    function animate() {
      requestAnimationFrame(animate);
      time += 0.002;

      updateParticles();

      // Enhance wobble effect
      group.rotation.x = Math.sin(time * wobble.frequency) * wobble.amplitude;
      group.rotation.y = Math.cos(time * wobble.frequency) * wobble.amplitude;

      renderer.render(scene, camera);
    }

    function handleResize() {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }

    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        height: '75vh',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'crosshair'
      }}
    >
      {showParams && mousePosition && (
        <div style={{
          position: 'absolute',
          left: mousePosition.x + 10,
          top: mousePosition.y + 10,
          pointerEvents: 'none',
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          color: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>Aizawa Attractor</div>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px' }}>
            a: {params.a.toFixed(2)}, b: {params.b.toFixed(2)}, c: {params.c.toFixed(2)},
            d: {params.d.toFixed(2)}, e: {params.e.toFixed(2)}, f: {params.f.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default AizawaAttractor;
