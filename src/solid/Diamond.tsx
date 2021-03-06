import * as React from "react";

const SvgDiamond = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M242.2 8.3c-9.6-11.1-26.8-11.1-36.4 0l-200 232c-7.8 9-7.8 22.3 0 31.3l200 232c9.6 11.1 26.8 11.1 36.4 0l200-232c7.8-9 7.8-22.3 0-31.3l-200-232z" />
  </svg>
);

SvgDiamond.displayName = "SvgDiamond";
SvgDiamond.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiamond;
