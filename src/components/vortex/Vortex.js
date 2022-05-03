import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// This sandbox shows how to prgressively load an asset through nested suspense blocks
// 1. A generic fallback
// 2. Lesser resolution
// 3. High resolution

export default function Vortex() {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Canvas>
        <Rotate position-y={0} scale={2}>
          <Suspense fallback={null}>
            <Model url="/scene.gltf" />
          </Suspense>
        </Rotate>
      </Canvas>
    </Suspense>
  );
}

function Model({ url, ...props }) {
  // useGLTF suspends the component, it literally stops processing
  const { scene } = useGLTF(url);
  // By the time we're here the model is gueranteed to be available
  return <primitive object={scene} {...props} />;
}

function Rotate(props) {
  const ref = useRef(); d
  useFrame((state) => (ref.current.rotation.y = state.clock.elapsedTime / 5));
  return <group ref={ref} {...props} />;
}
