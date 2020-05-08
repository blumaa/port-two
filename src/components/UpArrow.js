import React, {useCallback} from "react";
import { useMappedState } from "redux-react-hook";


const UpArrow = () => {

    const mapState = useCallback((state) => {
        return {
          theme: state.themeState,
        };
      }, []);
    
      const { theme } = useMappedState(mapState);
  return (
    <svg
      id="svg20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76.39 69.46"
    >
      <title>uparrow</title>
      <g id="uparrow">
        <g id="arrow2">
          <g id="g6-1">
            <g id="g4-8-2">
              <path
                id="path2-5"
                d="M41.93,5.42,75.53,39a4.13,4.13,0,0,1,0,5.84l-2.47,2.47a4.12,4.12,0,0,1-5.84,0L39,19.13,10.75,47.38a4.16,4.16,0,0,1-5.85,0L2.43,44.9a4.13,4.13,0,0,1,0-5.84L36.07,5.42a4.18,4.18,0,0,1,5.86,0Z"
                transform="translate(-0.35 -4.22)"
                fill="#999"
              />
            </g>
          </g>
          <g id="g6">
            <g id="g4-8">
              <path
                id="path2"
                d="M41.35,5.48,75,39.09a4.13,4.13,0,0,1,0,5.84l-2.47,2.48a4.13,4.13,0,0,1-5.84,0L38.42,19.19,10.16,47.44a4.15,4.15,0,0,1-5.84,0L1.85,45a4.13,4.13,0,0,1,0-5.84L35.48,5.48a4.19,4.19,0,0,1,5.87,0Z"
                transform="translate(-0.35 -4.22)"
                fill={theme.theme.mainText}
              />
            </g>
          </g>
        </g>
        <g id="arrow1">
          <g id="g6-1-2" data-name="g6-1">
            <g id="g4-8-2-2" data-name="g4-8-2">
              <path
                id="path2-5-2"
                data-name="path2-5"
                d="M41.64,30.45l33.6,33.61a4.13,4.13,0,0,1,0,5.84l-2.47,2.48a4.13,4.13,0,0,1-5.84,0L38.71,44.16,10.46,72.41a4.16,4.16,0,0,1-5.85,0L2.14,69.93a4.13,4.13,0,0,1,0-5.84L35.78,30.45a4.18,4.18,0,0,1,5.86,0Z"
                transform="translate(-0.35 -4.22)"
                fill="#999"
              />
            </g>
          </g>
          <g id="g6-2" data-name="g6">
            <g id="g4-8-2-3" data-name="g4-8">
              <path
                id="path2-2"
                data-name="path2"
                d="M41.06,30.51l33.6,33.61a4.13,4.13,0,0,1,0,5.84l-2.47,2.48a4.15,4.15,0,0,1-5.85,0L38.12,44.22,9.87,72.47a4.15,4.15,0,0,1-5.84,0L1.56,70a4.13,4.13,0,0,1,0-5.84L35.19,30.51a4.19,4.19,0,0,1,5.87,0Z"
                transform="translate(-0.35 -4.22)"
                fill={theme.theme.mainText}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default UpArrow;
