import * as React from "react";

const SvgSmoking = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M553.3 87.1a20.29 20.29 0 01-9.3-16.8V8a8 8 0 00-8-8h-48a8 8 0 00-8 8v62.3c0 22 10.2 43.4 28.6 55.4a147.29 147.29 0 0167.4 124V280a8 8 0 008 8h48a8 8 0 008-8v-30.3a195.28 195.28 0 00-86.7-162.6zm-65.6 54.5C463.8 125 448 99.3 448 70.3V8a8 8 0 00-8-8h-48a8 8 0 00-8 8v66.4c0 43.7 24.6 81.6 60.3 106.7a83.62 83.62 0 0135.7 68.6V280a8 8 0 008 8h48a8 8 0 008-8v-30.3a131.59 131.59 0 00-56.3-108.1z"
      opacity={0.4}
    />
    <path
      d="M536 352h-48a8 8 0 00-8 8v144a8 8 0 008 8h48a8 8 0 008-8V360a8 8 0 00-8-8zm96 0h-48a8 8 0 00-8 8v144a8 8 0 008 8h48a8 8 0 008-8V360a8 8 0 00-8-8zm-200 0H48a48 48 0 00-48 48v64a48 48 0 0048 48h384a16 16 0 0016-16V368a16 16 0 00-16-16z"
      className="smoking_svg__fa-primary"
    />
  </svg>
);

SvgSmoking.displayName = "SvgSmoking";
SvgSmoking.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSmoking;
