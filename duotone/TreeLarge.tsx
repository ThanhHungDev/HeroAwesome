import * as React from "react";

const SvgTreeLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M414.81 512H256V320l31-52.42c3.14-5.32-1.43-11.58-8.46-11.58H256V144a16 16 0 00-16-16h-32a16 16 0 00-16 16v208h-22.53c-7 0-11.6 6.26-8.46 11.58L192 416v96H33.13c-28.5 0-43.7-34.5-24.7-56.38L98.24 352h-36c-25.61 0-39.51-29.21-23.24-48.5L134 192H89.24c-21.3 0-32.9-22.5-19.3-37.29L204.74 8.17c10-10.89 28.6-10.89 38.6 0l134.93 146.54c13.6 14.79 2 37.29-19.3 37.29h-44.8L409 303.46c16.3 19.3 2.4 48.54-23.2 48.54h-36l89.77 103.58c18.94 21.8 3.84 56.42-24.76 56.42z"
      opacity={0.4}
    />
    <path
      d="M287 267.58L256 320v192h-64v-96l-31-52.42c-3.14-5.32 1.43-11.58 8.46-11.58H192V144a16 16 0 0116-16h32a16 16 0 0116 16v112h22.53c7.04 0 11.61 6.26 8.47 11.58z"
      className="tree-large_svg__fa-primary"
    />
  </svg>
);

SvgTreeLarge.displayName = "SvgTreeLarge";
SvgTreeLarge.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTreeLarge;