import * as React from "react";

const SvgBat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M411.83 175.3L320 230.4l-91.83-55.1L256 64l42.66 32h42.67L384 64z"
      opacity={0.4}
    />
    <path
      d="M640 320l-49.63-16.54a64 64 0 00-73.49 25.21L480 384l-11.82-11.82a64 64 0 00-90.51 0 65.74 65.74 0 00-5.95 6.86L320 448l-51.72-69a64 64 0 00-89.6-12.8 64.73 64.73 0 00-6.86 5.95L160 384l-36.89-55.33a64 64 0 00-73.49-25.21L0 320l81.55-190.31a32 32 0 0142-16.8 32.58 32.58 0 013.86 2L320 230.4l192.56-115.53a32 32 0 0143.91 11 32.58 32.58 0 012 3.86z"
      className="bat_svg__fa-primary"
    />
  </svg>
);

SvgBat.displayName = "SvgBat";
SvgBat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBat;
