import * as React from "react";

const SvgGlobeStand = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M94.87 305.14a160 160 0 11226.27 0 160 160 0 01-226.27 0z"
      opacity={0.4}
    />
    <path
      d="M4.69 377.38l59.5-59.5c2.82 3.23 5 6.81 8.07 9.88a192.1 192.1 0 00271.62 0c74.89-74.86 74.89-196.67 0-271.53-3-3-6.23-5.74-9.41-8.53l43-43a16 16 0 0122.64 0L411.45 16a16 16 0 010 22.63l-10.7 10.7c69.82 93.94 62.34 227.16-22.91 312.38A238.35 238.35 0 01256.09 427v37h92a36 36 0 0136 36 12 12 0 01-12 12H76a12 12 0 01-12-12 36 36 0 0136-36h92v-32.75a239.42 239.42 0 01-126.65-46.64l-26.71 26.7a16 16 0 01-22.64 0L4.69 400a16 16 0 010-22.62z"
      className="globe-stand_svg__fa-primary"
    />
  </svg>
);

SvgGlobeStand.displayName = "SvgGlobeStand";
SvgGlobeStand.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlobeStand;
