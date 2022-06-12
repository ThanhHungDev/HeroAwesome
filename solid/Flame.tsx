import * as React from "react";

const SvgFlame = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 0C79.7 101.33 0 220.92 0 300.55 0 425.05 78.95 512 192 512s192-86.95 192-211.45C384 220.6 303.78 100.86 192 0zm0 448c-70.58 0-128-52.89-128-117.89 0-44.13 25.84-71.51 34.34-79.76 3.12-3.12 8.19-3.12 11.31 0a7.98 7.98 0 012.34 5.66v40c0 30.93 25.07 56 56 56s56-25.07 56-56c0-72-112.64-64.77-39.43-164.33 2.89-3.93 7.48-4.16 10.58-3.17 1.62.53 5.38 2.24 5.38 6.78 0 33.55 25.05 54.97 51.57 77.63 33.38 28.54 67.9 58.04 67.9 117.21C320 395.11 262.58 448 192 448z" />
  </svg>
);

SvgFlame.displayName = "SvgFlame";
SvgFlame.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlame;
