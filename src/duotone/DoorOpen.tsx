import * as React from "react";

const SvgDoorOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M0 464v32a16 16 0 0016 16h336v-64H16a16 16 0 00-16 16zm624-16h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M312.24 1l-192 49.74C106 54.44 96 67.7 96 82.92V448h256V33.18C352 11.6 332.44-4.23 312.24 1zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z"
      className="door-open_svg__fa-primary"
    />
  </svg>
);

SvgDoorOpen.displayName = "SvgDoorOpen";
SvgDoorOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDoorOpen;
