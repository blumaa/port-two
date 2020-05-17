import React, { useRef, useEffect, useCallback, useState } from "react";
import { gsap, Back, Power3 } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useMappedState } from "redux-react-hook";

gsap.registerPlugin(DrawSVGPlugin);

const WebSocketLogo = () => {
  const mapState = useCallback((state) => {
    return {
      theme: state.themeState,
    };
  }, []);

  const { theme } = useMappedState(mapState);
  let logo = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // gsap.set(logo.current, { rotation: -45 });
    // gsap.to(logo.current, 1, {
    //   rotation: 45,
    //   ease: Power2.easeInOut,
    // });

    let tl = gsap
      .timeline()
      .addLabel("start")
      .fromTo(
        logo.current,
        2.5,
        { drawSVG: "0% 0%" },
        { drawSVG: "0% 100%", ease: Power3.easeInOut }
      )

    tl.play();
  }, []);

  return (
    <svg
      id="icon"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2741.87 1976.03"
    >
      <title>websocket</title>
      <path
        d="M1879.3,1412.67h310.35V667.49L1840,317.84,1620.54,537.29,1879.3,796.05v616.61Zm311.17,155.57H1107.93L849.16,1309.49,958.9,1199.77l213.72,213.72h439.72l-433.17-434L1289.72,869l433.17,433.18V862.38L1510,649.48,1618.9,540.57,1080.91.12H0L309.53,309.65v.82h642l226.83,226.82L846.71,868.94,619.88,642.11V466.05H309.53V770.67l537.18,537.18L628.07,1526.48l349.65,349.66H2500l-309.53-307.9Z"
        transform="translate(120.71 49.88)"
        fill="none"
        stroke={theme.theme.mainText}
        stroke-miterlimit="10"
        stroke-width="100"
        ref={logo}
      />
    </svg>
  );
};

export default WebSocketLogo;
