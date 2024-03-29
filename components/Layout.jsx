import { Stars, Float, OrbitControls, Html } from "@react-three/drei";

import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense } from "react";
import Alkaabaview from "./Alkaabaview";
import { TextureLoader } from "three";
import Footer from "./Footer";
import Link from "next/link";
import Links from "./Links";

function Khaaba() {
  const { viewport } = useThree();
  return (
    <mesh scale={viewport.width / 11}>
      <Alkaabaview />
    </mesh>
  );
}

function Quran() {
  const { scene } = useThree();
  const loaders = new TextureLoader();
  const textur = loaders.load("/quran.jpg");
  scene.background = textur;
  scene.backgroundIntensity = 0.1;
  return null;
}

function Layout(props) {
  return (
    <>
      <div className="relative h-screen w-full  text-white">
        <div className="  h-full w-full bg-blue-900 text-white   ">
          <Canvas>
            <Suspense fallback={null}>
              <Html center>
                <Links />
              </Html>
              <ambientLight intensity={0.5} />
              <pointLight />
              <Quran />
              <Khaaba />

              <Float>
                <Stars
                  radius={70}
                  depth={2}
                  count={10000}
                  factor={4}
                  saturation={0}
                  fade
                  speed={1}
                />
              </Float>
              <OrbitControls
                autoRotate={true}
                enableZoom={false}
                enablePan={true}
                enableDamping={true}
                enableRotate={false}
              />
            </Suspense>
          </Canvas>

          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
