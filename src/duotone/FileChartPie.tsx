import * as React from "react";

const SvgFileChartPie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zM136.47 438.5a111.26 111.26 0 01-63-63c-30-77.36 17.44-150.7 86.53-164.84V352h141.34c-14.14 69.09-87.48 116.58-164.87 86.5zM192 320V199.86A120.12 120.12 0 01312.14 320z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM160 210.66C90.91 224.8 43.42 298.14 73.47 375.5a111.26 111.26 0 0063 63c77.39 30.08 150.73-17.41 164.87-86.5H160z"
      className="file-chart-pie_svg__fa-primary"
    />
  </svg>
);

SvgFileChartPie.displayName = "SvgFileChartPie";
SvgFileChartPie.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileChartPie;
