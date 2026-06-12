import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function NavDrone() {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.01;

    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 3) * 0.08;
  });

  return (
    <group ref={ref}>
      {/* Core Sphere */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.55, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00ffff" />
      </mesh>
    </group>
  );
}