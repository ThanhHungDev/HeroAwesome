import * as React from "react";

const SvgChartBar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 400v32a16 16 0 01-16 16H32a32 32 0 01-32-32V80a16 16 0 0116-16h32a16 16 0 0116 16v304h432a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M275.2 96h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8zm-96 128h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8zm288-160h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8zm-96 96h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8z"
      className="chart-bar_svg__fa-primary"
    />
  </svg>
);

SvgChartBar.displayName = "SvgChartBar";
SvgChartBar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChartBar;
