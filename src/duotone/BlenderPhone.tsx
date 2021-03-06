import * as React from "react";

const SvgBlenderPhone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M497.46 288L480 352H192V0h384l-17.45 64H392a8 8 0 00-8 8v16a8 8 0 008 8h157.82l-17.45 64H392a8 8 0 00-8 8v16a8 8 0 008 8h131.64l-17.45 64H392a8 8 0 00-8 8v16a8 8 0 008 8z"
      opacity={0.4}
    />
    <path
      d="M158.8 335L133 271.75a16.79 16.79 0 00-17.24-10.26l-45 4.42a214.78 214.78 0 010-147.72l45 4.42A16.81 16.81 0 00133 112.35l25.8-63.26A16.3 16.3 0 00152.12 29L112.84 4.92C98.51-3.87 80.09-.5 69 12a269.64 269.64 0 002.09 362.49c9.87 10.8 29.12 12.48 41.66 4.8l39.4-24.18A16.3 16.3 0 00158.8 335zM480 384H192a64 64 0 00-64 64v32a32 32 0 0032 32h352a32 32 0 0032-32v-32a64 64 0 00-64-64zm-144 96a32 32 0 1132-32 32 32 0 01-32 32zm56-192h105.46l8.72-32H392a8 8 0 00-8 8v16a8 8 0 008 8zm0-96h131.64l8.72-32H392a8 8 0 00-8 8v16a8 8 0 008 8zm0-128a8 8 0 00-8 8v16a8 8 0 008 8h157.81l8.73-32z"
      className="blender-phone_svg__fa-primary"
    />
  </svg>
);

SvgBlenderPhone.displayName = "SvgBlenderPhone";
SvgBlenderPhone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlenderPhone;
