import * as React from "react";

const SvgBrackets = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M128 32H32A32 32 0 000 64v384a32 32 0 0032 32h96a16 16 0 0016-16v-16a16 16 0 00-16-16H48V80h80a16 16 0 0016-16V48a16 16 0 00-16-16zm288 0h-96a16 16 0 00-16 16v16a16 16 0 0016 16h80v352h-80a16 16 0 00-16 16v16a16 16 0 0016 16h96a32 32 0 0032-32V64a32 32 0 00-32-32z" />
  </svg>
);

SvgBrackets.displayName = "SvgBrackets";
SvgBrackets.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBrackets;
