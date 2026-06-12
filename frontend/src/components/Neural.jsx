import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NeuralNetwork() {
  const group = useRef();

  const { nodes, lines } = useMemo(() => {
    const radius = 2.2;
    const nodeCount = 180;

    const nodes = [];

    // Create spherical node distribution
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;

      const r = radius + Math.random() * 0.3;

      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      nodes.push(new THREE.Vector3(x, y, z));
    }

    const linePositions = [];

    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);

        if (distance < 0.8) {
          linePositions.push(
            nodes[i].x,
            nodes[i].y,
            nodes[i].z,
            nodes[j].x,
            nodes[j].y,
            nodes[j].z
          );
        }
      }
    }

    return {
      nodes,
      lines: new Float32Array(linePositions),
    };
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.clock.elapsedTime * 0.15;

    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });

  return (
    <group ref={group}>
      {/* Nodes */}
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={[node.x, node.y, node.z]}
        >
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color="#00e5ff" />
        </mesh>
      ))}

      {/* Connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={lines}
            count={lines.length / 3}
            itemSize={3}
          />
        </bufferGeometry>

        <lineBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.4}
        />
      </lineSegments>
    </group>
  );
}