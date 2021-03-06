import * as React from "react";

const SvgFlaskPotion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 416 512" {...props}>
    <path
      d="M64 352a154.39 154.39 0 011.92-24.48c61.84-24.46 131.65-20.73 181 4 36.58 18.29 78.12 20.41 105 20.56v3.23A143.83 143.83 0 01315.29 448h-214.6A143.6 143.6 0 0164 352z"
      opacity={0.4}
    />
    <path
      d="M304 169.05V96h-64v111.3c24.51 13.18 114.1 49.87 112 148a143.82 143.82 0 01-36.71 92.7h-214.6A143.6 143.6 0 0164 352c0-99.51 88.31-132.74 112-145.13V96h-64v72.12C45.61 202.85 0 271.88 0 352a207.15 207.15 0 0053.93 139.7 63.44 63.44 0 0047 20.3H315a64 64 0 0047.57-20.85A207.15 207.15 0 00416 356.67c1.71-79.95-44.8-151.49-112-187.62zM96 64h224a16 16 0 0016-16V16a16 16 0 00-16-16H96a16 16 0 00-16 16v32a16 16 0 0016 16z"
      className="flask-potion_svg__fa-primary"
    />
  </svg>
);

SvgFlaskPotion.displayName = "SvgFlaskPotion";
SvgFlaskPotion.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlaskPotion;
