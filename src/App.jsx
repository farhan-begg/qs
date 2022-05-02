// import React, { Suspense } from "react";
// import { Canvas, useFrame, useLoader } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import "./App.css";
// import Ground from "./components/threeModels/Ground";
// import { useEffect } from "react";
// import { Mesh } from "three";
// import * as THREE from "three";
// import gsap from "gsap";

// import "antd/dist/antd.css"; // This does something

// // get other plugins:
// import ScrollTrigger from "gsap/ScrollTrigger";
// import SplitText from "gsap";
// import Navbar from "./components/navbar/Navbar";
// gsap.registerPlugin(ScrollTrigger, SplitText);

// function CarShow() {
//   return (
//     <>
//       <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
//       <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
//       <color args={[0, 0, 0]} attach="background" />
//       <SpaceMan className="space-man" />
//       <Text3d />
//       <spotLight
//         color={[1, 0.25, 0.7]}
//         intensity={1}
//         angle={0.6}
//         penumbra={0.5}
//         position={[5, 15, 0]}
//         castShadow
//         shadow-bias={-0.0001}
//       />
//       <spotLight
//         color={[0.14, 0.5, 1]}
//         intensity={1}
//         angle={0.6}
//         penumbra={0.5}
//         position={[-5, 15, 0]}
//         // castShadow
//         shadow-bias={-0.0001}
//       />
//       <Ground />
//     </>
//   );
// }

// function SpaceMan() {
//   const gltf = useLoader(
//     GLTFLoader,
//     process.env.PUBLIC_URL + "models/spaceman/scene.gltf",
//   );

//   useEffect(() => {
//     gltf.scene.scale.set(0.011, 0.011, 0.011);
//     gltf.scene.position.set(0, 0, 0);
//     gltf.scene.rotation.set(6, 5, 0);
//     // gltf.scene.curlNoise.set(6, 5, 0)

//     let titles = [...document.querySelectorAll("h2")];
//     console.log(titles);

//     gsap.from("h2", {
//       scrollTrigger: {
//         trigger: "h2",
//         toggleActions: "play",
//       },
//       duration: 0.41,
//       stagger: 0.1,
//       scale: 3,
//       autoAlpha: 0,
//       rotation: 90,
//     });
//     let o = { a: 0 };
//     gsap.to(o, {
//       a: 1,
//       scrollTrigger: {
//         trigger: ".wrap",
//         markers: true,
//         start: "top top",
//         end: "bottom bottom",
//         // snap: 1 / (titles.length - 1),
//         onUpdate: (self) => {
//           gltf.scene.rotation.y = 0.2 * 3.14 * self.progress;
//           gltf.scene.rotation.x = 0.2 * 3.14 * self.progress;
//           gltf.scene.rotation.z = 0.2 * 3.14 * self.progress;

//           gltf.scene.position.y = 0.5 * 3.14 * self.progress;
//           gltf.scene.position.x = 0.9 * 3.14 * self.progress;
//           gltf.scene.position.z = 0.6 * 3.14 * self.progress;
//         },
//       },
//     });

//     // tl.current = gsap
//     // .timeline({
//     //   scrollTrigger: {
//     //     trigger: ".section-two",
//     //     start: ".section-two",
//     //     endTrigger: ".section-five",
//     //     end: "bottom bottom",
//     //     scrub: 1
//     //   }
//     // })
//     // .to(gltf.scene.rotation, { y: .00 })
//     // .to(camera.position, { x: 0 })
//     // .to(gltf.scene.rotation, { z: 0 })
//     // .to(scene.rotation, { z: 0.00, y: 0 }, "simultaneously")
//     // .to(camera.position, { x: 0.0 }, "simultaneously");
//     gltf.scene.traverse((object) => {
//       if (object instanceof Mesh) {
//         object.position.y = 0;
//         object.position.x = 0;

//         object.position.z = 1;
//         object.castShadow = true;
//         object.receiveShadow = true;

//         object.material.envMapIntensity = 1;
//         console.log(object);
//       }
//     });
//   }, [gltf]);

//   useFrame((state) => {
//     let t = state.clock.getElapsedTime();

//     let group = gltf.scene.children[0];
//     group.children[0].rotation.z = t * -1;
//   });
//   return <primitive object={gltf.scene} />;
// }

// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="wrap">
//         <div className="section one">
//           <div className="section-one-text-container">
//             <div className="title-text-container">
//               <h2>W</h2>
//               <h2>e</h2>
//               <h2>l</h2>
//               <h2>c</h2>
//               <h2>o</h2>
//               <h2>m</h2>
//               <h2>e</h2>
//               <div style={{ width: "20px", height: "100%" }}></div>
//               <h2>t</h2>
//               <h2>o</h2>
//               <div style={{ width: "20px", height: "100%" }}></div>
//               <h2>Q</h2>
//               <h2>u</h2>
//               <h2>a</h2>
//               <h2>t</h2>
//               <h2>u</h2>
//               <h2>m</h2>
//               <div style={{ width: "20px", height: "100%" }}></div>
//               <h2>S</h2>
//               <h2>o</h2>
//               <h2>c</h2>
//               <h2>i</h2>
//               <h2>t</h2>
//               <h2>y</h2>
//               <h2></h2>
//             </div>

//             <div className="subtitle-container">
//               <p className="subtitle">
//                 Cosmos is a rapidly expanding ecosystem of independent
//                 interconnected blockchains built using developer-friendly
//                 application components and connected with ground-breaking IBC
//                 (Inter-Blockchain Communication) protocol.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="section two">
//           <div className="section-two-wrapper">
//             <div
//               className="title-text-container"
//               style={{ display: "flex", width: "fitContent" }}
//             >
//               <h2>O</h2>
//               <h2>u</h2>
//               <h2>r</h2>
//               <div style={{ width: "20px", height: "100%" }}></div>

//               <h2>M</h2>
//               <h2>i</h2>
//               <h2>s</h2>
//               <h2>s</h2>
//               <h2>i</h2>
//               <h2>o</h2>
//               <h2>n</h2>
//               <div style={{ width: "20px", height: "100%" }}></div>
//               <h2>S</h2>
//               <h2>t</h2>
//               <h2>a</h2>
//               <h2>t</h2>
//               <h2>e</h2>
//               <h2>m</h2>
//               <h2>e</h2>
//               <h2>n</h2>
//               <h2>t</h2>
//             </div>
//             <p>
//               With Cosmos, developers can choose to build entirely autonomous
//               application-specific blockchains that can easily interconnect.
//               This means that, unlike with other leading blockchains today, they
//               are no longer forced to exist as smart contracts on someone else's
//               chain. They can opt-out of high transaction fees and network
//               congestion, make their own rules, and scale for mainstream
//               adoption.
//             </p>
//             <p>
//               This has massive implications for the future of decentralized
//               finance (DeFi), non-fungible tokens (NFTs), gaming, autonomous
//               organizations, social networks, marketplaces, and the sustainable
//               growth of blockchain technology, the internet of value, and the
//               ownership economy in which everyone has a stake.
//             </p>
//             <p>
//               Instead of one million blockchain apps competing for throughput on
//               a single base layer, why not one million blockchain apps
//               interconnected across one million sovereign blockchains? This is
//               what’s possible with Cosmos.
//             </p>
//           </div>
//         </div>

//         <div className="section">
//           <div style={{ display: "flex", width: "100px" }}>
//             <h2>o</h2>
//             <h2>m</h2>
//             <h2>t</h2>
//             <h2>i</h2>
//             <h2>t</h2>
//             <h2></h2>
//             <h2>t</h2>
//             <h2>s</h2>
//             <h2>s</h2>
//             <h2>s</h2>
//             <h2>s</h2>
//             <h2>s</h2>
//             <h2></h2>
//             <h2>s</h2>
//             <h2>s</h2>
//           </div>{" "}
//           <p>
//             lorem upsum somesthing somethign something aildasdlna nahdfklafk
//           </p>
//         </div>

//         <div className="section">
//           <div style={{ display: "flex", width: "100px" }}>
//             <h2>o</h2>
//             <h2>m</h2>
//             <h2>t</h2>
//             <h2>i</h2>
//             <h2>t</h2>
//             <h2></h2>
//             <h2>t</h2>
//             <h2>s</h2>
//             <h2>s</h2>
//             <h2>s</h2>
//             <h2>s</h2>
//             <h2>s</h2>
//             <h2></h2>
//             <h2>s</h2>
//             <h2>s</h2>
//           </div>{" "}
//           <p>
//             lorem upsum somesthing somethign something aildasdlna nahdfklafk
//           </p>
//         </div>
//       </div>
//       <div className="container">
//         <Suspense fallback={null}>
//           <Canvas zoom={false} shadows>
//             <CarShow />
//             {/* <Boxes /> */}
//           </Canvas>
//         </Suspense>
//       </div>
//     </>
//   );
// }

// export default App;
// import Loader from "components/loading/Loader";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Modal from "./components/modal/Modal";
import Account from "./components/Account/Account";
import Vortex from "components/vortex/Vortex";
// import Modal from "./components/modal/Modal";

const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Modal style={{ background: "red" }} />
      <Account style={{ background: "red" }} />
      <div
        style={{
          background: "black",
          height: "100vh",
          zIndex: "-1",
          position: "absolute",
          width: "100vw",
        }}
      >
        <Vortex />
        {/* <Modal /> */}
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default App;
