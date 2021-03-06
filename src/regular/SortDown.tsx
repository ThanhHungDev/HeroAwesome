import * as React from "react";

const SvgSortDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M272 288H48.1c-42.6 0-64.2 51.7-33.9 81.9l111.9 112c18.7 18.7 49.1 18.7 67.9 0l112-112c30-30.1 8.7-81.9-34-81.9zM160 448L48 336h224L160 448z" />
  </svg>
);

SvgSortDown.displayName = "SvgSortDown";
SvgSortDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortDown;
