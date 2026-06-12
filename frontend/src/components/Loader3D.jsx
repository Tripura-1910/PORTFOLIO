import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import NeuralNetwork from "./Neural";

function EnergySphere() {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x += 0.001;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
     <mesh position={[0,0,-0.5]}>
  <ringGeometry args={[2.2, 2.3, 128]} />
  <meshBasicMaterial
    color="#00e5ff"
    transparent
    opacity={0.4}
  />
</mesh>
    </Float>
  );
}

function Particles() {
  const particles = useMemo(() => {
    const arr = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return arr;
  }, []);

  return (
    <Points positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="white"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Loader3DScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 60,
      }}
    >
      <ambientLight intensity={0.5} />

      <pointLight
        position={[0, 0, 3]}
        intensity={40}
        color="#ff3355"
      />

      <pointLight
        position={[0, 0, -3]}
        intensity={20}
        color="#ff0066"
      />

      <group scale={1}>
  <NeuralNetwork />
</group>

<group scale={1.4} rotation={[0, Math.PI / 4, 0]}>
  <NeuralNetwork />
</group>

<group scale={0.7} rotation={[Math.PI / 6, 0, 0]}>
  <NeuralNetwork />
</group>

      <Particles />

      <EffectComposer>
        <Bloom
  intensity={3}
  luminanceThreshold={0}
  luminanceSmoothing={0.8}
/>
      </EffectComposer>
    </Canvas>
  );
}