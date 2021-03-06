import * as React from "react";

const SvgUserChart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288H307.76a127.45 127.45 0 0139.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0zM312 217.94l55 55a24 24 0 0034 .06l72-72 24.3 24.3c11.34 11.34 30.73 3.31 30.73-12.73V124a12 12 0 00-12-12h-88.57c-16 0-24.07 19.39-12.73 30.73L439 167l-55 55-55-55a24 24 0 00-34 0l-14.75 14.75C285 195.07 288 209.13 288 224a126.17 126.17 0 01-2 19.95z"
      opacity={0.4}
    />
    <path
      d="M160 320a96 96 0 10-96-96 96 96 0 0096 96zm48 32h-3.81c-13.93 4.83-28.64 8-44.19 8s-30.26-3.17-44.19-8H112A112 112 0 000 464a48 48 0 0048 48h224a48 48 0 0048-48 112 112 0 00-112-112z"
      className="user-chart_svg__fa-primary"
    />
  </svg>
);

SvgUserChart.displayName = "SvgUserChart";
SvgUserChart.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserChart;
