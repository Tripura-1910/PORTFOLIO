// Background3D.jsx
import { Canvas } from "@react-three/fiber";

function Particles() {
  return (
    <>
      {Array.from({ length: 200 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
          ]}
        >
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial />
        </mesh>
      ))}
    </>
  );
}

export default function Background3D() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={1} />
      <Particles />
    </Canvas>
  );
}