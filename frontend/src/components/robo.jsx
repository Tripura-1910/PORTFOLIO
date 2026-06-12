import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function RobotHead() {
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 2) * 0.3;

    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 3) * 0.05;
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[-0.12, 0.05, 0.35]}>
        <sphereGeometry args={[0.05]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh position={[0.12, 0.05, 0.35]}>
        <sphereGeometry args={[0.05]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}