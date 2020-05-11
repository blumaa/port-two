import React, { useRef, useEffect } from "react";
import { gsap, Power3, Bounce, Linear, Elastic } from "gsap";

const UfoMoonAnimationTitle = () => {
  let moon = useRef(null);
  let topMoon = useRef(null);
  let ufo = useRef(null);
  let developer = useRef(null);
  let musician = useRef(null);
  let educator = useRef(null);
  let aaronBlum = useRef(null);

  console.log("moon", moon);
  console.log("moon2", topMoon);
  console.log("ufo", ufo);

//   useEffect(() => {
//     console.log("moon", moon);
//     console.log("moon2", topMoon);
//     console.log("ufo", ufo);
//     console.log("moon", developer);
//     console.log("moon2", educator);
//     console.log("ufo", musician);
//     console.log("ufo", aaronBlum);

//     const ufoMove = () => {
//       let tl = gsap.timeline({
//         repeat: 0,
//         reversed: false,
//         repeat: -1,
//       });

//       // tl.add("ufoStart");
//       tl.set(ufo, {
//         visibility: "visible",
//       });
//       tl.set(topMoon, {
//         visibility: "hidden",
//       });
//       tl.to(ufo, 2, {
//         transformOrigin: "center",
//         scale: 0.5,
//         x: 220,
//         y: -50,
//         ease: Linear.easeNone,
//       })
//         .set(topMoon, { visibility: "visible" })
//         .to(ufo, 1, {
//           scale: 0.3,
//           x: 0,
//           y: 0,
//           ease: Linear.easeNone,
//         })
//         .to(ufo, 1, {
//           scale: 0.5,
//           x: -220,
//           y: 50,
//           ease: Linear.easeNone,
//         })
//         .set(topMoon, { visibility: "hidden" })
//         .to(ufo, 2, {
//           scale: 1,
//           x: 0,
//           y: 0,
//           ease: Linear.easeNone,
//         });
//     };
//     const topMoonRotate = () => {
//       let tl = gsap.timeline({
//         repeat: 0,
//         reversed: false,
//         repeat: -1,
//       });

//       tl.to(topMoon, 30, {
//         rotation: 360,
//         scale: 0.45,
//         repeat: -1,
//         yoyo: true,
//         transformOrigin: "50% 50%",
//         ease: Elastic.easeInOut,
//       });
//       //   tl.fromTo(topMoon, 30, {
//       //     transformOrigin: 'center',
//       //     roation: 0
//       //   }, {rotation: 360, ease: Linear.easeNone})
//     };

//     const moonRotate = () => {
//       let tl = gsap.timeline({
//         repeat: 0,
//         reversed: false,
//         onComplete: function () {
//           this.restart();
//         },
//       });

//       tl.to(moon, 30, {
//         rotation: 360,
//         scale: 0.45,
//         repeat: -1,
//         yoyo: true,
//         transformOrigin: "50% 50%",
//         ease: Elastic.easeInOut,
//       });
//       //   tl.fromTo(moon, 30, {
//       //     transformOrigin: 'center',
//       //     roation: 0
//       //   }, {rotation: 360, ease: Linear.easeNone})
//     };

//     const titleBounce = () => {
//       let tl = gsap.timeline({
//         repeat: 0,
//         reversed: false,
//       });

//       tl.add("titleStart");
//       tl.from(aaronBlum, 3, { x: -700, ease: Bounce.easeOut });
//     };

//     ufoMove();
//     titleBounce();
//     moonRotate();
//     topMoonRotate();
//     // tl.add("scene2");
//     // tl.from(aaronBlum, {
//     //   opacity: 0,
//     //   y: 100,
//     //   duration: 1,
//     // });
//   }, []);

  const handleUfoClick = () => {
    // const ufoFreakOut = () => {
    //   let tl = gsap.timeline({
    //     repeat: 0,
    //     reversed: false,
    //   });

    //   tl.to(ufo, 3, {
    //     rotation: 360,
    //     scale: 1.45,
    //     repeat: 1,
    //     yoyo: true,
    //     transformOrigin: "50% 50%",
    //     ease: Elastic.easeInOut,
    //   });
    // };
    // ufoFreakOut()
  };

  return (
    <>
      <svg
        id="baselayer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1651 926.95"
      >
        <title>portfolioanimation</title>
        <g>
          <rect x="0.5" y="0.5" width="1650" height="925.95" fill="#252523" />
          <path
            d="M1629.55-14.8v925h-1649V-14.8h1649m1-1h-1651v927h1651V-15.8Z"
            transform="translate(20.45 15.8)"
          />
        </g>
        <g id="moon" ref={(el) => (moon = el)}>
          <path
            id="circlebackground"
            d="M956.71,457A156.71,156.71,0,1,1,800,300.29,156.71,156.71,0,0,1,956.71,457Z"
            transform="translate(20.45 15.8)"
            fill="#565656"
          />
          <g id="innerobjects">
            <path
              id="shine2"
              d="M662.4,434a5,5,0,0,1-.95-.09,4.77,4.77,0,0,1-3.73-5.62h0a145.41,145.41,0,0,1,26.06-58.15,4.77,4.77,0,0,1,7.63,5.72,135.92,135.92,0,0,0-24.34,54.32A4.78,4.78,0,0,1,662.4,434Z"
              transform="translate(20.45 15.8)"
              fill="#cdcdcd"
            />
            <path
              id="shine1"
              d="M708.05,355.81a4.77,4.77,0,0,1-3.13-8.37,146.36,146.36,0,0,1,15.25-11.58,4.77,4.77,0,0,1,5.26,8,137.31,137.31,0,0,0-14.25,10.82A4.75,4.75,0,0,1,708.05,355.81Z"
              transform="translate(20.45 15.8)"
              fill="#cdcdcd"
            />
            <circle
              id="hole6"
              cx="778.2"
              cy="432.66"
              r="24.11"
              fill="#cdcdcd"
            />
            <path
              id="hole5"
              d="M953.71,487.63a155.89,155.89,0,0,1-15.89,44,24.12,24.12,0,1,1,15.89-44Z"
              transform="translate(20.45 15.8)"
              fill="#cdcdcd"
            />
            <circle
              id="hole4"
              cx="790.49"
              cy="534.05"
              r="24.11"
              fill="#cdcdcd"
            />
            <circle
              id="hole3"
              cx="867.29"
              cy="550.4"
              r="16.35"
              fill="#cdcdcd"
            />
            <circle
              id="hole2"
              cx="886.38"
              cy="440.9"
              r="16.35"
              fill="#cdcdcd"
            />
            <circle
              id="hole1"
              cx="872.72"
              cy="401.61"
              r="8.18"
              fill="#cdcdcd"
            />
          </g>
        </g>
        <g id="ufo" ref={(el) => (ufo = el)} onClick={handleUfoClick}>
          <path
            id="wheels"
            d="M800.05,494.1a13.1,13.1,0,1,0,13.1,13.1A13.13,13.13,0,0,0,800.05,494.1ZM835,485.37a13.1,13.1,0,1,0,13.1,13.1A13.13,13.13,0,0,0,835,485.37Zm-69.83,0a13.1,13.1,0,1,0,13.09,13.1A13.13,13.13,0,0,0,765.14,485.37Z"
            transform="translate(20.45 15.8)"
            fill="#324d5b"
          />
          <path
            id="base"
            d="M759.9,452c22.15-13.64,58.05-13.64,80.2,0s22.15,35.79,0,49.32-58.05,13.64-80.2,0S737.75,465.62,759.9,452Z"
            transform="translate(20.45 15.8)"
            fill="#e2574c"
          />
          <path
            id="baseshadow"
            d="M765.35,498c-21.38-13.2-22.15-34.26-2.18-47.9-1.09.54-2.18,1.2-3.27,1.85-22.15,13.64-22.15,35.79,0,49.32s58.05,13.64,80.2,0c.77-.43,1.53-1,2.18-1.42C820,511.67,786.41,511,765.35,498Z"
            transform="translate(20.45 15.8)"
            fill="#cb4e44"
          />
          <path
            id="saucer"
            d="M750.62,427.65c27.28-16.15,71.48-16.15,98.76,0s27.28,42.44,0,58.59-71.48,16.15-98.76,0S723.34,443.91,750.62,427.65Z"
            transform="translate(20.45 15.8)"
            fill="#324d5b"
          />
          <path
            id="saucershadow"
            d="M853.85,482c-27.28,16.15-71.47,16.15-98.75,0-22.05-13.1-26.3-32.63-12.88-48.23-18.44,16.15-15.6,38.3,8.4,52.59,27.28,16.15,71.48,16.15,98.76,0A54.12,54.12,0,0,0,862.14,476,65.55,65.55,0,0,1,853.85,482Z"
            transform="translate(20.45 15.8)"
            fill="#2d4552"
          />
          <path
            id="bubble"
            d="M800.05,393.71a43.63,43.63,0,0,1,43.65,43.65c0,24.11-19.53,34.92-43.65,34.92s-43.64-10.81-43.64-34.92A43.63,43.63,0,0,1,800.05,393.71Z"
            transform="translate(20.45 15.8)"
            fill="#e4e7e7"
          />
          <path
            id="leftbubble"
            d="M756.41,437.36c0,24,19.42,34.81,43.32,34.92h.32V393.71A43.63,43.63,0,0,0,756.41,437.36Z"
            transform="translate(20.45 15.8)"
            fill="#d8dbdb"
          />
          <path
            id="head"
            d="M800.05,472.28c9.83,0,18.88-1.75,26.19-5.57V437.36a26.19,26.19,0,1,0-52.37,0v29.35C781.18,470.53,790.23,472.28,800.05,472.28Z"
            transform="translate(20.45 15.8)"
            fill="#3db39e"
          />
          <path
            id="lefthead"
            d="M773.87,437.36v29.35c7.2,3.71,16.25,5.57,26,5.57h.21V411.17A26.19,26.19,0,0,0,773.87,437.36Z"
            transform="translate(20.45 15.8)"
            fill="#3aaa96"
          />
          <path
            id="eyebackground"
            d="M800.05,428.63A13.1,13.1,0,1,1,787,441.72,13.13,13.13,0,0,1,800.05,428.63Z"
            transform="translate(20.45 15.8)"
            fill="#fff"
          />
          <path
            id="leftshadow"
            d="M800.05,428.63a13.1,13.1,0,0,0,0,26.19Z"
            transform="translate(20.45 15.8)"
            fill="#f2f2f2"
          />
          <path
            id="eye"
            d="M800.05,435.18a6.55,6.55,0,1,1-6.54,6.54A6.56,6.56,0,0,1,800.05,435.18Z"
            transform="translate(20.45 15.8)"
            fill="#324d5b"
          />
          <path
            id="lefteye"
            d="M800.05,435.18a6.55,6.55,0,0,0,0,13.09Z"
            transform="translate(20.45 15.8)"
            fill="#2f4956"
          />
        </g>
        <g id="topMoon" ref={(el) => (topMoon = el)}>
          <path
            id="circlebackground-2"
            data-name="circlebackground"
            d="M956.71,457A156.71,156.71,0,1,1,800,300.29,156.71,156.71,0,0,1,956.71,457Z"
            transform="translate(20.45 15.8)"
            fill="#565656"
          />
          <g id="innerobjects-2" data-name="innerobjects">
            <path
              id="shine2-2"
              data-name="shine2"
              d="M662.4,434a5,5,0,0,1-.95-.09,4.77,4.77,0,0,1-3.73-5.62h0a145.41,145.41,0,0,1,26.06-58.15,4.77,4.77,0,0,1,7.63,5.72,135.92,135.92,0,0,0-24.34,54.32A4.78,4.78,0,0,1,662.4,434Z"
              transform="translate(20.45 15.8)"
              fill="#cdcdcd"
            />
            <path
              id="shine1-2"
              data-name="shine1"
              d="M708.05,355.81a4.77,4.77,0,0,1-3.13-8.37,146.36,146.36,0,0,1,15.25-11.58,4.77,4.77,0,0,1,5.26,8,137.31,137.31,0,0,0-14.25,10.82A4.75,4.75,0,0,1,708.05,355.81Z"
              transform="translate(20.45 15.8)"
              fill="#cdcdcd"
            />
            <circle
              id="hole6-2"
              data-name="hole6"
              cx="778.2"
              cy="432.66"
              r="24.11"
              fill="#cdcdcd"
            />
            <path
              id="hole5-2"
              data-name="hole5"
              d="M953.71,487.63a155.89,155.89,0,0,1-15.89,44,24.12,24.12,0,1,1,15.89-44Z"
              transform="translate(20.45 15.8)"
              fill="#cdcdcd"
            />
            <circle
              id="hole4-2"
              data-name="hole4"
              cx="790.49"
              cy="534.05"
              r="24.11"
              fill="#cdcdcd"
            />
            <circle
              id="hole3-2"
              data-name="hole3"
              cx="867.29"
              cy="550.4"
              r="16.35"
              fill="#cdcdcd"
            />
            <circle
              id="hole2-2"
              data-name="hole2"
              cx="886.38"
              cy="440.9"
              r="16.35"
              fill="#cdcdcd"
            />
            <circle
              id="hole1-2"
              data-name="hole1"
              cx="872.72"
              cy="401.61"
              r="8.18"
              fill="#cdcdcd"
            />
          </g>
        </g>
        <text
          id="musicianText"
          ref={(el) => (musician = el)}
          transform="translate(793.82 778.5)"
          font-size="87"
          fill="#a39274"
          font-family="SpaceMono-Regular, Space Mono"
        >
          musician
        </text>
        <text
          id="educatorText"
          ref={(el) => (educator = el)}
          transform="translate(1032.82 604.34)"
          font-size="87"
          fill="#a39274"
          font-family="SpaceMono-Regular, Space Mono"
        >
          educator
        </text>
        <text
          id="developerText"
          ref={(el) => (developer = el)}
          transform="translate(1104.18 409.5)"
          font-size="87"
          fill="#a39274"
          font-family="SpaceMono-Regular, Space Mono"
        >
          developer
        </text>
        <text
          id="aaronBlum"
          ref={(el) => (aaronBlum = el)}
          transform="translate(622.18 242.5)"
          font-size="150"
          fill="#dfd8c8"
          font-family="SpaceMono-Regular, Space Mono"
        >
          Aaron Blum
        </text>
      </svg>
    </>
  );
};

export default UfoMoonAnimationTitle;


