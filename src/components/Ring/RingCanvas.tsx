import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { ReactNode, Suspense } from "react";
import { LoadingCube } from "../Loader3D/LoadingCube";
import { ConfigContextProvider } from "./ConfigContext";
import ConfigInterface from "./ConfigInterface";
import { Model } from "./Model";

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
        frameloop="demand"
        dpr={window?.devicePixelRatio}
        flat
        shadows
        camera={{ fov: 25, position: [0, 0, 25] }}
        onCreated={(state) => {
          state.gl.setClearColor("#fff1f4");
        }}
      >
        {children}
      </Canvas>
      <ConfigInterface />
    </ConfigContextProvider>
  );
};

export function RingCanvas() {
  return (
    <>
      <Leva flat collapsed />
      <RingCanvasWrapper>
        <Stage environment="park" shadows={true} adjustCamera={false}>
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 2, -Math.PI / 5]}
            snap
          >
            <Suspense fallback={<LoadingCube />}>
              <Model />
            </Suspense>
            {/* <axesHelper args={[5]} /> */}
            {/* <OrbitControls /> */}
          </PresentationControls>
        </Stage>
      </RingCanvasWrapper>
    </>
  );
}
