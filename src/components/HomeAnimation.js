import React from "react";

const HomeAnimation = () => {
  return (
    <>
      <svg
        id="baselayer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 50 799 400"
      >
        <title>ufo-orbitting-moon</title>
        <g id="moon">
          <path
            id="circlebackground"
            d="M842,423c0,220.64-178.86,399.5-399.5,399.5S43,643.59,43,423,221.86,23.45,442.5,23.45C662.76,24.37,841.08,202.7,842,423Z"
            transform="translate(-43 -23.45)"
            fill="#565656"
          />
          <g id="innerobjects">
            <path
              id="shine2"
              d="M91.71,364.43a12.17,12.17,0,0,1-11.94-14.56h0a371,371,0,0,1,66.44-148.26,12.16,12.16,0,0,1,19.45,14.59,346.45,346.45,0,0,0-62,138.49,12.2,12.2,0,0,1-11.9,9.74Z"
              transform="translate(-43 -23.45)"
              fill="#cdcdcd"
            />
            <path
              id="shine1"
              d="M208.1,165a12.16,12.16,0,0,1-8-21.33A372.48,372.48,0,0,1,239,114.12a12.16,12.16,0,0,1,13.41,20.29A347.44,347.44,0,0,0,216.07,162,12.1,12.1,0,0,1,208.1,165Z"
              transform="translate(-43 -23.45)"
              fill="#cdcdcd"
            />
            <circle
              id="hole6"
              cx="291.79"
              cy="297.17"
              r="61.46"
              fill="#cdcdcd"
            />
            <path
              id="hole5"
              d="M834.36,501a398.05,398.05,0,0,1-40.51,112.21A61.47,61.47,0,1,1,834.36,501Z"
              transform="translate(-43 -23.45)"
              fill="#cdcdcd"
            />
            <circle
              id="hole4"
              cx="323.11"
              cy="555.63"
              r="61.46"
              fill="#cdcdcd"
            />
            <circle
              id="hole3"
              cx="518.91"
              cy="597.32"
              r="41.69"
              fill="#cdcdcd"
            />
            <circle
              id="hole2"
              cx="567.58"
              cy="318.15"
              r="41.69"
              fill="#cdcdcd"
            />
            <circle id="hole1" cx="532.75" cy="218" r="20.84" fill="#cdcdcd" />
          </g>
        </g>
        <g id="ufo">
          <path
            id="wheels"
            d="M452.19,536a33.38,33.38,0,1,0,33.38,33.38A33.48,33.48,0,0,0,452.19,536Zm89-22.26a33.39,33.39,0,1,0,33.38,33.39A33.49,33.49,0,0,0,541.21,513.69Zm-178,0a33.39,33.39,0,1,0,33.39,33.39A33.49,33.49,0,0,0,363.17,513.69Z"
            transform="translate(-43 -23.45)"
            fill="#324d5b"
          />
          <path
            id="base"
            d="M349.82,428.57c56.47-34.77,148-34.77,204.47,0s56.47,91.24,0,125.74c-56.48,34.77-148,34.77-204.47,0S293.35,463.34,349.82,428.57Z"
            transform="translate(-43 -23.45)"
            fill="#e2574c"
          />
          <path
            id="baseshadow"
            d="M363.73,546c-54.52-33.66-56.47-87.35-5.56-122.12-2.79,1.39-5.57,3.06-8.35,4.73-56.47,34.77-56.47,91.24,0,125.74,56.47,34.77,148,34.77,204.47,0,1.94-1.11,3.89-2.51,5.56-3.62C503.1,580.74,417.42,579.07,363.73,546Z"
            transform="translate(-43 -23.45)"
            fill="#cb4e44"
          />
          <path
            id="saucer"
            d="M326.17,366.53c69.55-41.17,182.22-41.17,251.76,0s69.55,108.22,0,149.39-182.21,41.17-251.76,0S256.63,408,326.17,366.53Z"
            transform="translate(-43 -23.45)"
            fill="#324d5b"
          />
          <path
            id="saucershadow"
            d="M589.34,505.07c-69.55,41.17-182.21,41.17-251.76,0-56.19-33.38-67-83.18-32.83-123-47,41.17-39.78,97.65,21.42,134.09,69.55,41.17,182.22,41.17,251.76,0,13.35-8.07,24.2-17,32.55-26.43A166.37,166.37,0,0,1,589.34,505.07Z"
            transform="translate(-43 -23.45)"
            fill="#2d4552"
          />
          <path
            id="bubble"
            d="M452.19,280A111.24,111.24,0,0,1,563.47,391.29c0,61.48-49.8,89-111.28,89s-111.27-27.54-111.27-89A111.24,111.24,0,0,1,452.19,280Z"
            transform="translate(-43 -23.45)"
            fill="#e4e7e7"
          />
          <path
            id="leftbubble"
            d="M340.92,391.29c0,61.2,49.52,88.74,110.44,89h.83V280A111.24,111.24,0,0,0,340.92,391.29Z"
            transform="translate(-43 -23.45)"
            fill="#d8dbdb"
          />
          <path
            id="head"
            d="M452.19,480.31c25,0,48.13-4.45,66.77-14.19V391.29a66.77,66.77,0,0,0-133.53,0v74.83C404.07,475.86,427.16,480.31,452.19,480.31Z"
            transform="translate(-43 -23.45)"
            fill="#3db39e"
          />
          <path
            id="lefthead"
            d="M385.43,391.29v74.83c18.36,9.46,41.45,14.19,66.21,14.19h.55V324.53A66.77,66.77,0,0,0,385.43,391.29Z"
            transform="translate(-43 -23.45)"
            fill="#3aaa96"
          />
          <path
            id="eyebackground"
            d="M452.19,369a33.38,33.38,0,1,1-33.38,33.38A33.48,33.48,0,0,1,452.19,369Z"
            transform="translate(-43 -23.45)"
            fill="#fff"
          />
          <path
            id="leftshadow"
            d="M452.19,369a33.38,33.38,0,0,0,0,66.76Z"
            transform="translate(-43 -23.45)"
            fill="#f2f2f2"
          />
          <path
            id="eye"
            d="M452.19,385.73a16.69,16.69,0,1,1-16.69,16.69A16.74,16.74,0,0,1,452.19,385.73Z"
            transform="translate(-43 -23.45)"
            fill="#324d5b"
          />
          <path
            id="lefteye"
            d="M452.19,385.73a16.69,16.69,0,0,0,0,33.38Z"
            transform="translate(-43 -23.45)"
            fill="#2f4956"
          />
        </g>
        <g id="moon2">
          <path
            id="circlebackground-2"
            data-name="circlebackground"
            d="M842,423c0,220.64-178.86,399.5-399.5,399.5S43,643.59,43,423,221.86,23.45,442.5,23.45C662.76,24.37,841.08,202.7,842,423Z"
            transform="translate(-43 -23.45)"
            fill="#565656"
          />
          <g id="innerobjects-2" data-name="innerobjects">
            <path
              id="shine2-2"
              data-name="shine2"
              d="M91.71,364.43a12.17,12.17,0,0,1-11.94-14.56h0a371,371,0,0,1,66.44-148.26,12.16,12.16,0,0,1,19.45,14.59,346.45,346.45,0,0,0-62,138.49,12.2,12.2,0,0,1-11.9,9.74Z"
              transform="translate(-43 -23.45)"
              fill="#cdcdcd"
            />
            <path
              id="shine1-2"
              data-name="shine1"
              d="M208.1,165a12.16,12.16,0,0,1-8-21.33A372.48,372.48,0,0,1,239,114.12a12.16,12.16,0,0,1,13.41,20.29A347.44,347.44,0,0,0,216.07,162,12.1,12.1,0,0,1,208.1,165Z"
              transform="translate(-43 -23.45)"
              fill="#cdcdcd"
            />
            <circle
              id="hole6-2"
              data-name="hole6"
              cx="291.79"
              cy="297.17"
              r="61.46"
              fill="#cdcdcd"
            />
            <path
              id="hole5-2"
              data-name="hole5"
              d="M834.36,501a398.05,398.05,0,0,1-40.51,112.21A61.47,61.47,0,1,1,834.36,501Z"
              transform="translate(-43 -23.45)"
              fill="#cdcdcd"
            />
            <circle
              id="hole4-2"
              data-name="hole4"
              cx="323.11"
              cy="555.63"
              r="61.46"
              fill="#cdcdcd"
            />
            <circle
              id="hole3-2"
              data-name="hole3"
              cx="518.91"
              cy="597.32"
              r="41.69"
              fill="#cdcdcd"
            />
            <circle
              id="hole2-2"
              data-name="hole2"
              cx="567.58"
              cy="318.15"
              r="41.69"
              fill="#cdcdcd"
            />
            <circle
              id="hole1-2"
              data-name="hole1"
              cx="532.75"
              cy="218"
              r="20.84"
              fill="#cdcdcd"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default HomeAnimation;
