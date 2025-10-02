"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Sparkles, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ConfettiParticles() {
  const count = 200;
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const colorPalette = [
      new THREE.Color("#F36B1C"), // pumpkin
      new THREE.Color("#2F6F3E"), // stemGreen
      new THREE.Color("#FFD700"), // gold
      new THREE.Color("#FF69B4"), // pink
      new THREE.Color("#00CED1"), // turquoise
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spread particles in a larger area
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      const color =
        colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 0.3 + 0.1;
    }

    return { positions, colors, sizes };
  }, [count]);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function SpinningPinata() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.5, 0.5]}
    >
      <mesh>
        {/* Main body - sphere */}
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#F36B1C"
          roughness={0.3}
          metalness={0.2}
          emissive="#F36B1C"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Decorative rings */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.1, 16, 50]} />
        <meshStandardMaterial
          color="#2F6F3E"
          roughness={0.2}
          metalness={0.5}
          emissive="#2F6F3E"
          emissiveIntensity={0.3}
        />
      </mesh>

      <mesh position={[0, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.1, 16, 50]} />
        <meshStandardMaterial
          color="#FFD700"
          roughness={0.2}
          metalness={0.5}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["transparent"]} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#F36B1C" />
        <pointLight position={[10, 10, 5]} intensity={0.5} color="#2F6F3E" />

        {/* 3D Elements */}
        <SpinningPinata />
        <ConfettiParticles />

        {/* Sparkles for extra magic */}
        <Sparkles
          count={50}
          scale={10}
          size={2}
          speed={0.3}
          opacity={0.6}
          color="#FFD700"
        />

        {/* Allow slight rotation with mouse */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

