"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, OrbitControls } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
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

interface CandyParticle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  life: number;
}

function CandyBurst({ active }: { active: boolean }) {
  const particlesRef = useRef<THREE.Points>(null);
  const [particles] = useState<CandyParticle[]>(() => {
    const candyColors = [
      new THREE.Color("#FF0000"), // red
      new THREE.Color("#00FF00"), // green
      new THREE.Color("#0000FF"), // blue
      new THREE.Color("#FFFF00"), // yellow
      new THREE.Color("#FF00FF"), // magenta
      new THREE.Color("#00FFFF"), // cyan
      new THREE.Color("#FFA500"), // orange
      new THREE.Color("#FF69B4"), // pink
    ];

    return Array.from({ length: 100 }, () => ({
      position: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
      ),
      color: candyColors[Math.floor(Math.random() * candyColors.length)],
      life: 0,
    }));
  });

  useFrame((state, delta) => {
    if (!particlesRef.current || !active) return;

    const positions = particlesRef.current.geometry.attributes.position
      .array as Float32Array;
    const colors = particlesRef.current.geometry.attributes.color
      .array as Float32Array;

    particles.forEach((particle, i) => {
      if (active) {
        particle.life += delta;
        particle.velocity.y -= 0.002; // gravity
        particle.position.add(particle.velocity);

        const i3 = i * 3;
        positions[i3] = particle.position.x;
        positions[i3 + 1] = particle.position.y;
        positions[i3 + 2] = particle.position.z;

        const opacity = Math.max(0, 1 - particle.life / 2);
        colors[i3] = particle.color.r * opacity;
        colors[i3 + 1] = particle.color.g * opacity;
        colors[i3 + 2] = particle.color.b * opacity;
      } else {
        // Reset particle
        particle.position.set(0, 0, 0);
        particle.life = 0;
      }
    });

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.color.needsUpdate = true;
  });

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particles.length * 3);
    const colors = new Float32Array(particles.length * 3);

    particles.forEach((particle, i) => {
      const i3 = i * 3;
      positions[i3] = 0;
      positions[i3 + 1] = 0;
      positions[i3 + 2] = 0;
      colors[i3] = particle.color.r;
      colors[i3 + 1] = particle.color.g;
      colors[i3 + 2] = particle.color.b;
    });

    return { positions, colors };
  }, [particles]);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.length}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        vertexColors
        transparent
        opacity={1}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Pumpkin() {
  return (
    <group>
      {/* Main pumpkin body - squashed sphere */}
      <mesh scale={[1, 0.8, 1]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#F36B1C"
          roughness={0.4}
          metalness={0.1}
          emissive="#F36B1C"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Pumpkin ridges/grooves */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <mesh key={i} rotation={[0, (i * Math.PI) / 4, 0]} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 2.4, 8]} />
          <meshStandardMaterial
            color="#E55A0F"
            roughness={0.5}
            metalness={0.1}
          />
        </mesh>
      ))}

      {/* Jack-o-lantern face - pushed further out */}
      {/* Left eye - triangle */}
      <mesh position={[-0.5, 0.3, 1.45]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.25, 0.5, 3]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Right eye - triangle */}
      <mesh position={[0.5, 0.3, 1.45]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.25, 0.5, 3]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Nose - small triangle */}
      <mesh position={[0, 0.05, 1.48]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.15, 0.3, 3]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Mouth - curved smile made of boxes */}
      {[-0.7, -0.5, -0.3, -0.1, 0.1, 0.3, 0.5, 0.7].map((x, i) => {
        const curve = Math.abs(x) * 0.18 - 0.2;
        return (
          <mesh key={`mouth-${i}`} position={[x, -0.35 + curve, 1.42]}>
            <boxGeometry args={[0.13, 0.13, 0.2]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        );
      })}

      {/* Pumpkin stem */}
      <group position={[0, 1.3, 0]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.2, 0.5, 8]} />
          <meshStandardMaterial
            color="#2F6F3E"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        {/* Stem top detail */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.12, 0.15, 0.2, 8]} />
          <meshStandardMaterial
            color="#3A8B4A"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* Small leaves on stem */}
      <mesh position={[0.2, 1.4, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.4, 0.15, 0.05]} />
        <meshStandardMaterial color="#2F6F3E" roughness={0.6} />
      </mesh>
      <mesh position={[-0.2, 1.35, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.4, 0.15, 0.05]} />
        <meshStandardMaterial color="#2F6F3E" roughness={0.6} />
      </mesh>
    </group>
  );
}

function SpinningPinata() {
  const groupRef = useRef<THREE.Group>(null);
  const [phase, setPhase] = useState<"idle" | "spin" | "burst" | "done">(
    "idle"
  );
  const [timer, setTimer] = useState(0);
  const [candyBurst, setCandyBurst] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  useFrame((state, delta) => {
    if (!groupRef.current || phase === "done") return;

    setTimer((prev) => prev + delta);

    if (phase === "idle") {
      // Idle phase - gentle rotation for 2 seconds
      groupRef.current.rotation.y += delta * 0.3;

      if (timer > 2) {
        setPhase("spin");
        setTimer(0);
      }
    } else if (phase === "spin") {
      // Spinning phase - 3 full rotations (Math.PI * 6 = 3 rotations)
      // Complete in 2 seconds
      const rotationsPerSecond = 3; // 3 full rotations
      groupRef.current.rotation.y += delta * Math.PI * 2 * rotationsPerSecond;

      if (timer > 2) {
        setPhase("burst");
        setTimer(0);
        setCandyBurst(true);
      }
    } else if (phase === "burst") {
      // Burst phase - 2 seconds with slow rotation
      groupRef.current.rotation.y += delta * 0.2;

      if (timer > 2) {
        setCycleCount((prev) => prev + 1);
        setCandyBurst(false);

        // Check if we've completed 2 cycles
        if (cycleCount + 1 >= 2) {
          setPhase("done");
        } else {
          setPhase("idle");
          setTimer(0);
        }
      }
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <Pumpkin />
      </group>
      <CandyBurst active={candyBurst} />
    </>
  );
}

export function Scene3D() {
  return (
    <div className="hidden lg:block absolute left-1/2 top-32 -translate-x-32 w-48 h-48 xl:w-56 xl:h-56 2xl:-translate-x-40 z-10 pointer-events-none bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 40 }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#F36B1C" />
        <pointLight position={[10, 10, 5]} intensity={0.5} color="#2F6F3E" />

        {/* 3D Elements */}
        <SpinningPinata />
      </Canvas>
    </div>
  );
}
