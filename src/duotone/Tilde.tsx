import * as React from "react";

const SvgTilde = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 192v46.75c0 89-80.45 159.56-172.46 142.76-35.54-6.51-66.75-27.68-89.31-55.87l-66.52-83.15A49.25 49.25 0 0096 273.25V321a32 32 0 01-32 32H32a32 32 0 01-32-32v-40.92C0 202 58.67 132.75 136.64 128.25a144.69 144.69 0 01122.05 54.27l69.59 87A49.26 49.26 0 00416 238.75V192a32 32 0 0132-32h32a32 32 0 0132 32z"
      opacity={0.4}
    />
  </svg>
);

SvgTilde.displayName = "SvgTilde";
SvgTilde.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTilde;
