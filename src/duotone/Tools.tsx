import * as React from "react";

const SvgTools = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M193.8 227.7L18.74 402.76a64 64 0 0090.5 90.5l148.88-148.88a75.36 75.36 0 016.58-45.78zM64 472a24 24 0 1124-24 24 24 0 01-24 24zm443.73-362.9a12 12 0 00-20.12-5.51L413.25 178l-67.88-11.31-11.31-67.93 74.36-74.36a12 12 0 00-5.66-20.16 143.92 143.92 0 00-136.58 37.93c-39.64 39.64-50.55 97.1-34.05 147.2l-4.43 4.43 70.9 70.9a74.25 74.25 0 0185.4 13.9l7.21 7.21a141.74 141.74 0 0078.61-40 143.94 143.94 0 0037.91-136.71z"
      opacity={0.4}
    />
    <path
      d="M501.1 395.7a37.36 37.36 0 010 52.7l-52.7 52.7a37.18 37.18 0 01-52.58.12l-.12-.12L278.6 384c-23.1-23.1-27.5-57.6-13.9-85.4L158.1 192H96L0 64 64 0l128 96v62.1l106.6 106.6a74.25 74.25 0 0185.4 13.9z"
      className="tools_svg__fa-primary"
    />
  </svg>
);

SvgTools.displayName = "SvgTools";
SvgTools.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTools;
