import * as React from "react";

const SvgHomeLg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M496 512H368a16 16 0 01-16-16V368a16 16 0 00-16-16h-96a16 16 0 00-16 16v128a16 16 0 01-16 16H80a16 16 0 01-16-16V311c1.78-1.21 3.85-1.89 5.47-3.35L288 115l218.74 192.9c1.54 1.38 3.56 2 5.26 3.2V496a16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M527.92 283.88L298.6 81.61a16 16 0 00-21.17 0L48.11 283.89a16 16 0 01-22.59-1.21L4.1 258.89a16 16 0 011.21-22.59l256-226a39.85 39.85 0 0153.45 0L416 99.67V48a16 16 0 0116-16h64a16 16 0 0116 16v136.43l58.69 51.83a16 16 0 011.22 22.59l-21.4 23.82a16 16 0 01-22.59 1.21z"
      className="home-lg_svg__fa-primary"
    />
  </svg>
);

SvgHomeLg.displayName = "SvgHomeLg";
SvgHomeLg.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHomeLg;
