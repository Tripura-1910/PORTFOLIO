import {  Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer,  } from "@react-three/postprocessing";

function Character({ rotation }) {
  const { scene } = useGLTF("/character.glb");
  const group = useRef();

  useLayoutEffect(() => {
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());

  scene.position.sub(center);

  scene.rotation.z = 0.03;

  // Glow effect
scene.traverse((child) => {
  if (child.isMesh && child.material) {
    child.material.metalness = 0.85;
    child.material.roughness = 0.15;

    child.material.envMapIntensity = 2;

    child.material.emissive = child.material.color.clone();
    child.material.emissiveIntensity = 0 ;

    child.material.needsUpdate = true;

    child.castShadow = true;
    child.receiveShadow = true;
  }
});
}, [scene]);

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);

    const center = box.getCenter(new THREE.Vector3());

    scene.position.x -= center.x;
    scene.position.y -= center.y;
    scene.position.z -= center.z;

    scene.rotation.z = 0.03;
  }, [scene]);

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.y +=
      (rotation.current.y - group.current.rotation.y) * 0.05;
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={1} />
    </group>
  );
}

export default function Hero3D({ rotation }) {
  return (
<Canvas
  gl={{
    alpha: true,
    antialias: true,
  }}
  onCreated={({ gl }) => {
    gl.setClearColor(0x000000, 0);
  }}
  camera={{
    position: [0, 0, 170],
    fov: 55,
  }}
  style={{
    background: "transparent"
  }}
>

<ambientLight intensity={0.8} />

<directionalLight
  position={[20, 20, 20]}
  intensity={4}
  castShadow
/>

<pointLight
  position={[20, 10, 30]}
  intensity={2000}
  color="#ff3366"
/>

<pointLight
  position={[-20, 5, 20]}
  intensity={1200}
  color="#7c3aed"
/>

<spotLight
  position={[0, 30, 20]}
  angle={0.35}
  intensity={3000}
  penumbra={1}
  color="#ffffff"
/>

<Character rotation={rotation} />

<EffectComposer>
  
</EffectComposer>

<pointLight
  position={[0, 20, 30]}
  intensity={1500}
  color="#ff3366"
/>

<pointLight
  position={[0, -20, 20]}
  intensity={800}
  color="#ff6688"
/>

<directionalLight
  position={[5, 10, 5]}
  intensity={3}
/>

      <directionalLight
        position={[5, 10, 5]}
        intensity={3}
      />

   <mesh position={[0, 0, -15]}>
  <circleGeometry args={[28, 64]} />
  <meshBasicMaterial
    color="#ff3366"
    transparent
    opacity={0.08}
  />
</mesh>


      <Character rotation={rotation} />
      <Environment preset="night" />


      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}