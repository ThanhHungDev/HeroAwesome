import * as React from "react";

const SvgChartNetwork = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M64 240a64 64 0 1064 64 64.06 64.06 0 00-64-64zm88 80h48v-32h-48zm294.4-106.8l19.2 25.6 48-36-19.2-25.6zM576 64a64 64 0 1064 64 64.06 64.06 0 00-64-64z"
      opacity={0.4}
    />
    <path
      d="M576 384a63.84 63.84 0 00-38.3 13l-96-57.6a109.91 109.91 0 006.3-35.5 111.94 111.94 0 00-112-112 108.64 108.64 0 00-24.4 2.9l-40.8-87.4A63.84 63.84 0 10224 128c1.1 0 2.1-.3 3.2-.3l41 87.8C241.5 235.9 224 267.8 224 304a111.71 111.71 0 00193.2 76.7l95.8 57.5a63.87 63.87 0 1063-54.2zm-240-32a48 48 0 1148-48 48 48 0 01-48 48z"
      className="chart-network_svg__fa-primary"
    />
  </svg>
);

SvgChartNetwork.displayName = "SvgChartNetwork";
SvgChartNetwork.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChartNetwork;
