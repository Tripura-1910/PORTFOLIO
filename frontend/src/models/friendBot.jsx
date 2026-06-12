import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function RoboModelTwo() {
  const group = useRef();

  const { scene } = useGLTF("lol.glb");

  useFrame((state) => {
    if (!group.current) return;

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 4) * 0.05;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 2) * 0.2;
  });

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={1.5}
      />
    </group>
  );
}

useGLTF.preload("lol.glb");