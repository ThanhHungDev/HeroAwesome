import * as React from "react";

const SvgTruckPlow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M120 304a88 88 0 1088 88 88 88 0 00-88-88zm256 0a88 88 0 1088 88 88 88 0 00-88-88z"
      opacity={0.4}
    />
    <path
      d="M598.6 393.4a77.12 77.12 0 01-22.6-54.6V237.2a77.12 77.12 0 0122.6-54.6l36.7-36.7a16.06 16.06 0 000-22.6l-22.6-22.6a16.06 16.06 0 00-22.6 0l-36.7 36.7a141.23 141.23 0 00-41.4 99.9V288h-32v-64a32 32 0 00-32-32h-45.9l-82-136.7A48.17 48.17 0 00278.9 32H168a40 40 0 00-40 40v120H32a32 32 0 00-32 32v96a31.87 31.87 0 0010.2 23.43 120.13 120.13 0 01223 8.57h29.6a120.12 120.12 0 01226.4 0h24.1c3.1 32.6 16.7 63.3 40.1 86.6l36.7 36.7a16.06 16.06 0 0022.6 0l22.6-22.6a16.06 16.06 0 000-22.6zM192 192V96h77.9l57.6 96z"
      className="truck-plow_svg__fa-primary"
    />
  </svg>
);

SvgTruckPlow.displayName = "SvgTruckPlow";
SvgTruckPlow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTruckPlow;
