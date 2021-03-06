import * as React from "react";

const SvgPrintSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 672 512" {...props}>
    <path
      d="M366.86 433.14A159.41 159.41 0 01333.33 384H64v96a32 32 0 0032 32h320a32 32 0 0032-32v-3.2a159.82 159.82 0 01-81.14-43.66zM368 96a16 16 0 01-16-16V0H96a32 32 0 00-32 32v192h288a162.84 162.84 0 0114.88-17.14A159.82 159.82 0 01448 163.2V96z"
      opacity={0.4}
    />
    <path
      d="M368 96h80v-4.58a17.92 17.92 0 00-5.25-12.67l-73.43-73.5A18 18 0 00356.57 0H352v80a16 16 0 0016 16zm-16 128H64v-32a64 64 0 00-64 64v112a16 16 0 0016 16h317.33c-.24-.57-.5-1.14-.74-1.71A159.92 159.92 0 01352 224zm315.31 238.06l-77.41-77.41A126.65 126.65 0 00608 320a128 128 0 10-128 128c23.7 0 45.61-6.88 64.65-18.11l77.41 77.42a16 16 0 0022.63 0l22.62-22.62a16 16 0 000-22.63zM480 384a64 64 0 1164-64 64 64 0 01-64 64z"
      className="print-search_svg__fa-primary"
    />
  </svg>
);

SvgPrintSearch.displayName = "SvgPrintSearch";
SvgPrintSearch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPrintSearch;
