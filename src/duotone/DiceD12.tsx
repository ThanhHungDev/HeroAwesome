import * as React from "react";

const SvgDiceD12 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M7.54 176.92l123.62 123.62L240 246.11V139.24L59 74.07zM453 74.07l-181 65.17v106.87l108.84 54.42 123.62-123.62zM333.51 6.76A63.87 63.87 0 00304.89 0H207.1a63.91 63.91 0 00-28.62 6.76L89.72 51.14 256 111l166.28-59.86z"
      opacity={0.4}
    />
    <path
      d="M256 273.89l-108.59 54.29L206.23 512h99.53l58.82-183.82zM0 214.62v90.27a63.87 63.87 0 006.76 28.62l47.7 95.4a63.92 63.92 0 0028.62 28.62L169 500.47l-55-171.91zm398.05 114L343 500.48l85.88-42.94a64 64 0 0028.62-28.62l47.7-95.4a64.07 64.07 0 006.8-28.62v-90.27z"
      className="dice-d12_svg__fa-primary"
    />
  </svg>
);

SvgDiceD12.displayName = "SvgDiceD12";
SvgDiceD12.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceD12;