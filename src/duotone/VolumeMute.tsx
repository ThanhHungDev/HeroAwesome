import * as React from "react";

const SvgVolumeMute = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M0 328V184a24 24 0 0124-24h102.06l89-88.95c15-15 41-4.49 41 17V424c0 21.44-25.94 32-41 17l-89-88.95H24A24 24 0 010 328z"
      opacity={0.4}
    />
    <path
      d="M324.72 210.36a16.14 16.14 0 010-22.82l22.82-22.82a16.14 16.14 0 0122.82 0L416 210.36l45.64-45.64a16.14 16.14 0 0122.82 0l22.82 22.82a16.14 16.14 0 010 22.82L461.64 256l45.64 45.64a16.14 16.14 0 010 22.82l-22.82 22.82a16.14 16.14 0 01-22.82 0L416 301.64l-45.63 45.63a16.14 16.14 0 01-22.82 0l-22.82-22.82a16.14 16.14 0 010-22.82L370.36 256z"
      className="volume-mute_svg__fa-primary"
    />
  </svg>
);

SvgVolumeMute.displayName = "SvgVolumeMute";
SvgVolumeMute.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVolumeMute;
