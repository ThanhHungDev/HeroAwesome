import * as React from "react";

const SvgHeadphonesAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M496 416h-16a16 16 0 01-16-16V288c0-114.67-93.33-207.8-208-207.82S48 173.33 48 288v112a16 16 0 01-16 16H16a16 16 0 01-16-16V288C4.57 151.13 112.91 32 256 32s251.43 119.13 256 256v112a16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M160 288h-16a64.05 64.05 0 00-64 64.12v63.76A64.06 64.06 0 00144 480h16a32 32 0 0032-32.06V320.06A32 32 0 00160 288zm208 0h-16a32 32 0 00-32 32.06v127.88A32 32 0 00352 480h16a64.06 64.06 0 0064-64.12v-63.76A64.06 64.06 0 00368 288z"
      className="headphones-alt_svg__fa-primary"
    />
  </svg>
);

SvgHeadphonesAlt.displayName = "SvgHeadphonesAlt";
SvgHeadphonesAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadphonesAlt;
