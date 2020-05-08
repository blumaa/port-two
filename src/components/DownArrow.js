import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";

const DownArrow = () => {
  const mapState = useCallback((state) => {
    return {
      theme: state.themeState,
    };
  }, []);

  const { theme } = useMappedState(mapState);
  return (
    <svg id="svg20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.1 44.43">
      <title>downarrow</title>
      <g id="Layer_1" data-name="Layer 1">
        <g id="g6-1">
          <g id="g4-8-2">
            <path
              id="path2-5"
              d="M41.93,59.44l33.6-33.61a4.13,4.13,0,0,0,0-5.84l-2.47-2.47a4.13,4.13,0,0,0-5.84,0L39,45.74,10.75,17.48a4.16,4.16,0,0,0-5.85,0L2.43,20a4.13,4.13,0,0,0,0,5.84L36.07,59.44a4.18,4.18,0,0,0,5.86,0Z"
              transform="translate(-0.64 -16.22)"
              fill="#999"
            />
          </g>
        </g>
        <g id="g6">
          <g id="g4-8">
            <path
              id="path2"
              d="M41.35,59.38,75,25.77a4.13,4.13,0,0,0,0-5.84l-2.47-2.47a4.12,4.12,0,0,0-5.84,0L38.42,45.67,10.16,17.42a4.15,4.15,0,0,0-5.84,0L1.85,19.9a4.13,4.13,0,0,0,0,5.84L35.48,59.38a4.19,4.19,0,0,0,5.87,0Z"
              transform="translate(-0.64 -16.22)"
              fill={theme.theme.mainText}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DownArrow;
