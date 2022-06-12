import * as React from "react";

const SvgHeadset = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M192 464a48 48 0 0148-48h32a48 48 0 0148 48h101.72A42.28 42.28 0 00464 421.72s0-163.29-.12-165.72h.12c0-114.69-93.31-208-208-208S48 141.31 48 256v16a16 16 0 01-16 16H16a16 16 0 01-16-16v-16C4.58 118.83 113.18 0 256 0s251.42 118.83 256 256v165.72A90.28 90.28 0 01421.72 512H240a48 48 0 01-48-48z"
      opacity={0.4}
    />
    <path
      d="M368 176h-16a32 32 0 00-32 32v112a32 32 0 0032 32h16a64 64 0 0064-64v-48a64 64 0 00-64-64zm-208 0h-16a64 64 0 00-64 64v48a64 64 0 0064 64h16a32 32 0 0032-32V208a32 32 0 00-32-32z"
      className="headset_svg__fa-primary"
    />
  </svg>
);

SvgHeadset.displayName = "SvgHeadset";
SvgHeadset.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadset;
