import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function RobotModel() {
  const group = useRef();

  const { scene } = useGLTF("robot_playground.glb");

  useFrame((state) => {
    if (!group.current) return;

    // floating
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 2) * 0.05;

    // slight look around
    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={0.6}
      />
    </group>
  );
}

useGLTF.preload("robot_playground.glb");