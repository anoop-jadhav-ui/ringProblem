import { PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { ReactNode, Suspense, useRef } from "react";
import { Color, DirectionalLight } from "three";
import Loader3D from "../Loader3D/Loader3D";
import { ConfigContextProvider } from "./ConfigContext";
import { Model } from "./Model";
import ConfigInterface from "./ConfigInterface";

const RingCanvasWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigContextProvider>
      <Canvas
        style={{
          height: "100%",
          position: "absolute",
          width: "100%",
          right: 0,
          top: 0,
          pointerEvents: "auto",
          zIndex: 1,
        }}
        frameloop="always"
        dpr={window?.devicePixelRatio}
        flat
        camera={{ fov: 25, position: [0, 0, 25] }}
        shadows
      >
        {children}
      </Canvas>
      <ConfigInterface />
    </ConfigContextProvider>
  );
};

export function RingCanvas() {
  const canvasColor = useControls("Canvas Color", {
    color: "#fff1f4",
  });

  const ambientLight = useControls("AmbientLight", {
    intensity: 1,
  });

  const areaLight = useControls("Area Light", {
    color: "red",
    width: 500,
    height: 500,
    position: [0, 0, 5],
    intensity: 1,
  });

  const directionalLight = useControls("Directional Light", {
    color: "red",
    intensity: 1,
  });

  const directionLightRef = useRef<DirectionalLight>(null);

  return (
    <>
      <Leva flat collapsed />
      <RingCanvasWrapper>
        <color attach="background" args={[canvasColor.color]} />
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 2, -Math.PI / 5]}
          snap
        >
          <ambientLight intensity={ambientLight.intensity} />
          <directionalLight {...directionalLight} ref={directionLightRef} />
          <rectAreaLight
            width={areaLight.width}
            height={areaLight.height}
            position={areaLight.position}
            intensity={areaLight.intensity}
            color={new Color(areaLight.color)}
          />
          <Suspense fallback={<Loader3D />}>
            <Model />
            {/* <axesHelper args={[5]} /> */}
            {/* <OrbitControls /> */}
          </Suspense>
        </PresentationControls>
      </RingCanvasWrapper>
    </>
  );
}
