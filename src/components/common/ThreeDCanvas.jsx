import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function RotatingOrb() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.25;
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <icosahedronGeometry args={[1.1, 1]} />
      <meshStandardMaterial
        color="#2563eb"
        roughness={0.2}
        metalness={0.5}
        emissive="#1d4ed8"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

function FloatingMesh() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.2;
      group.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[-1.4, 0.4, 0]}>
        <boxGeometry args={[0.9, 0.5, 0.4]} />
        <meshStandardMaterial color="#2563eb" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0.6, -0.4, 0.2]} rotation={[0.3, 0.6, -0.2]}>
        <boxGeometry args={[0.6, 0.9, 0.3]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0.2, 0.8, -0.4]}>
        <tetrahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#1d4ed8" wireframe />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.04;
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t;
    }
  });

  const positions = React.useMemo(() => {
    const pts = [];
    for (let i = 0; i < 400; i += 1) {
      const radius = 2.3 + Math.random() * 0.8;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.6;
      pts.push(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius,
      );
    }
    return new Float32Array(pts);
  }, []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#60a5fa"
        opacity={0.6}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

function OrbitalRings() {
  return (
    <group>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.015, 30, 120]} />
        <meshBasicMaterial color="#60a5fa" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.9, 0.01, 30, 120]} />
        <meshBasicMaterial color="#93c5fd" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

const ThreeDCanvas = ({ className = '', variant = 'orb' }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const renderContent = () => {
    if (variant === 'mesh') {
      return (
        <>
          <FloatingMesh />
          <ParticleField />
        </>
      );
    }
    if (variant === 'particles') {
      return <ParticleField />;
    }
    return (
      <>
        <RotatingOrb />
        <OrbitalRings />
      </>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`relative rounded-3xl bg-linear-to-br from-[#0f172a] via-[#111827] to-[#1e3a8a] shadow-xl shadow-slate-900/40 overflow-hidden ${className}`}
    >
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 4], fov: 40 }}
          dpr={[1, 1.7]}
          gl={{ antialias: true }}
          frameloop="always"
        >
          <color attach="background" args={['transparent']} />
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <directionalLight
              intensity={1.2}
              position={[3, 4, 5]}
              castShadow
            />
            <pointLight intensity={0.4} position={[-3, -2, -4]} color="#60a5fa" />
            {renderContent()}
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.4}
            />
          </Suspense>
        </Canvas>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />
    </div>
  );
};

export default ThreeDCanvas;

