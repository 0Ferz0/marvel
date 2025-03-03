import React from "react";

const Spinner = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      width='200'
      height='200'
      style={{
        shapeRendering: "auto",
        display: "block",
        background: "rgb(255, 255, 255)",
        alignSelf: "center",
      }}
      xmlns-xlink='http://www.w3.org/1999/xlink'
    >
      {" "}
      <g>
        <circle fill='#000000' r='10' cy='50' cx='84'>
          <animate
            begin='0s'
            keySplines='0 0.5 0.5 1'
            values='10;0'
            keyTimes='0;1'
            calcMode='spline'
            dur='1.0869565217391304s'
            repeatCount='indefinite'
            attributeName='r'
          ></animate>
          <animate
            begin='0s'
            values='#000000;#000000;#a5acaf;#a71930;#000000'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='discrete'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='fill'
          ></animate>
        </circle>
        <circle fill='#000000' r='10' cy='50' cx='16'>
          <animate
            begin='0s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            values='0;0;10;10;10'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='spline'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='r'
          ></animate>
          <animate
            begin='0s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            values='16;16;16;50;84'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='spline'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='cx'
          ></animate>
        </circle>
        <circle fill='#a71930' r='10' cy='50' cx='50'>
          <animate
            begin='-1.0869565217391304s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            values='0;0;10;10;10'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='spline'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='r'
          ></animate>
          <animate
            begin='-1.0869565217391304s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            values='16;16;16;50;84'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='spline'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='cx'
          ></animate>
        </circle>
        <circle fill='#a5acaf' r='10' cy='50' cx='84'>
          <animate
            begin='-2.1739130434782608s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            values='0;0;10;10;10'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='spline'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='r'
          ></animate>
          <animate
            begin='-2.1739130434782608s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            values='16;16;16;50;84'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='spline'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='cx'
          ></animate>
        </circle>
        <circle fill='#000000' r='10' cy='50' cx='16'>
          <animate
            begin='-3.260869565217391s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            values='0;0;10;10;10'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='spline'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='r'
          ></animate>
          <animate
            begin='-3.260869565217391s'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            values='16;16;16;50;84'
            keyTimes='0;0.25;0.5;0.75;1'
            calcMode='spline'
            dur='4.3478260869565215s'
            repeatCount='indefinite'
            attributeName='cx'
          ></animate>
        </circle>
        <g></g>
      </g>
    </svg>
  );
};

export default Spinner;
