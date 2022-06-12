import * as React from "react";

const SvgList = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M80 368H16a16 16 0 00-16 16v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a16 16 0 00-16-16zm0-320H16A16 16 0 000 64v64a16 16 0 0016 16h64a16 16 0 0016-16V64a16 16 0 00-16-16zm0 160H16a16 16 0 00-16 16v64a16 16 0 0016 16h64a16 16 0 0016-16v-64a16 16 0 00-16-16zm416 176H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-320H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16V80a16 16 0 00-16-16zm0 160H176a16 16 0 00-16 16v32a16 16 0 0016 16h320a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
  </svg>
);

SvgList.displayName = "SvgList";
SvgList.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgList;
