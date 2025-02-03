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

// Utility functions
function hexToRGB(hex: string): [number, number, number] {
  const hexNum = hex.startsWith('#') ? parseInt(hex.substring(1), 16) : parseInt(hex.replace(/[^0-9a-f]/gi, ''), 16);
  return [
    ((hexNum >> 16) & 0xFF) / 255,
    ((hexNum >> 8) & 0xFF) / 255,
    (hexNum & 0xFF) / 255
  ];
}

function calculateAizawaDerivatives(x: number, y: number, z: number, params: typeof DEFAULT_PARAMS) {
  const dx = (z - params.b) * x - params.d * y;
  const dy = params.d * x + (z - params.b) * y;
  const dz = params.c + params.a * z - Math.pow(z, 3) / 3 - (Math.pow(x, 2) + Math.pow(y, 2)) * (1 + params.e * z) + params.f * z * Math.pow(x, 3);
  return { dx, dy, dz };
}

export function AizawaAttractor({
  params = DEFAULT_PARAMS,
  noiseFactor = 0.001,
  wobble = { frequency: 0.5, amplitude: 0.1 },
  particleCounts = { baseActive: 4000, hoverActive: 4000, trail: 50000 },
  color = '#FFFFFF',
  backgroundColor = '#000000'
}: AizawaAttractorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showParams, setShowParams] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const container = containerRef.current;
    const scene = new THREE.Scene();
    
    // Force a 1:1 aspect ratio for the camera
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });

    // Set pixel ratio for sharper rendering
    renderer.setPixelRatio(window.devicePixelRatio);
    const size = Math.min(container.clientWidth, container.clientHeight);
    renderer.setSize(size, size);
    
    const [bgR, bgG, bgB] = hexToRGB(backgroundColor);
    renderer.setClearColor(new THREE.Color(bgR, bgG, bgB), 1);
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

    function generateParticleStream(startIdx: number, count: number, positions: Float32Array, colors: Float32Array, sizes: Float32Array, options: { scale?: number, particleSize?: number } = {}) {
      const { scale = 1.5, particleSize = 0.04 } = options;
      // Start particles more centered around origin
      let x = (Math.random() - 0.5) * 0.1;
      let y = (Math.random() - 0.5) * 0.1;
      let z = (Math.random() - 0.5) * 0.1;

      const [r, g, b] = hexToRGB(color);
      const dt = 0.01;
      const randOffset = 0.025;

      for (let i = 0; i < count; i++) {
        const idx = (startIdx + i) * 3;
        
        // Add small random offsets to create more variation
        x += (Math.random() - 0.5) * randOffset;
        y += (Math.random() - 0.5) * randOffset;
        z += (Math.random() - 0.5) * randOffset;

        const { dx, dy, dz } = calculateAizawaDerivatives(x, y, z, params);

        x += dx * dt;
        y += dy * dt;
        z += dz * dt;

        positions[idx] = x * scale;
        positions[idx + 1] = y * scale;
        positions[idx + 2] = z * scale;

        colors[idx] = r;
        colors[idx + 1] = g;
        colors[idx + 2] = b;

        sizes[startIdx + i] = particleSize;
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
    activeSystem.position.set(0, 0, 0);
    trailSystem.position.set(0, 0, 0);

    // Ensure group is centered
    const group = new THREE.Group();
    group.position.set(0, -1, 0);  
    // Rotate the group to face upward (π/2 radians = 90 degrees)
    const initialRotationX = -Math.PI / 2;
    group.rotation.x = initialRotationX;

    // Adjust camera to better frame the centered group
    camera.position.set(0, 0, 9);
    camera.lookAt(0, -1, 0);  
    camera.up.set(0, 1, 0);

    group.add(activeSystem);
    group.add(trailSystem);
    scene.add(group);

    const NORMAL_SPEED = 0.0008;
    const HOVER_SPEED = 0.0002;
    const NORMAL_CAMERA_Z = 9;
    const HOVER_CAMERA_Z = 4;
    
    let time = 0;
    let currentSpeed = NORMAL_SPEED;
    let targetSpeed = NORMAL_SPEED;
    let currentCameraZ = NORMAL_CAMERA_Z;
    let targetCameraZ = NORMAL_CAMERA_Z;

    function handleMouseEnter() {
      setIsHovering(true);
      targetSpeed = HOVER_SPEED;
      targetCameraZ = HOVER_CAMERA_Z;
      setShowParams(true);
    }

    function handleMouseLeave() {
      setIsHovering(false);
      targetSpeed = NORMAL_SPEED;
      targetCameraZ = NORMAL_CAMERA_Z;
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

      function updateParticleSet(
        positions: Float32Array,
        count: number,
        options: { speedMultiplier?: number, updateSizes?: boolean } = {}
      ) {
        const { speedMultiplier = 1, updateSizes = false } = options;
        
        for (let i = 0; i < count; i++) {
          const idx = i * 3;
          let x = positions[idx] / 2;
          let y = positions[idx + 1] / 2;
          let z = positions[idx + 2] / 2;

          const { dx, dy, dz } = calculateAizawaDerivatives(x, y, z, params);

          positions[idx] = (x + dx * dt * speedMultiplier + (Math.random() - 0.5) * noiseFactor) * 2;
          positions[idx + 1] = (y + dy * dt * speedMultiplier + (Math.random() - 0.5) * noiseFactor) * 2;
          positions[idx + 2] = (z + dz * dt * speedMultiplier + (Math.random() - 0.5) * noiseFactor) * 2;

          if (updateSizes) {
            activeSizes[i] = 0.02 * (1 + Math.sin(time * 4 + i) * 0.3);
          }
        }
      }

      // Update active particles
      updateParticleSet(activePositions, maxActiveParticleCount, { updateSizes: true });
      
      // Update trail particles with slower speed
      updateParticleSet(trailPositions, trailParticleCount, { speedMultiplier: 0.2 });

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

      time += 0.01;

      // Update camera position with smooth interpolation
      currentCameraZ += (targetCameraZ - currentCameraZ) * 0.05;
      camera.position.setZ(currentCameraZ);

      // Update rotation while preserving initial pose
      const wobbleX = Math.sin(time * wobble.frequency) * wobble.amplitude;
      const wobbleY = Math.cos(time * wobble.frequency) * wobble.amplitude;
      group.rotation.x = initialRotationX + wobbleX;
      group.rotation.y = wobbleY;

      updateParticles();

      renderer.render(scene, camera);
    }

    function handleResize() {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const size = Math.min(container.clientWidth, container.clientHeight);
      renderer.setSize(size, size);
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
        height: '100%',
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
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          color: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontWeight: 600, marginBottom: '4px' }}>Aizawa Attractor</div>
          <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '11px' }}>
            a: {params.a.toFixed(2)}, b: {params.b.toFixed(2)}, c: {params.c.toFixed(2)},
            d: {params.d.toFixed(2)}, e: {params.e.toFixed(2)}, f: {params.f.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
