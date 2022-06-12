import * as React from "react";

const SvgChevronCircleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm72.5 349.6a23.9 23.9 0 010 33.9l-17 17a23.9 23.9 0 01-33.9 0L142.1 273a24 24 0 010-34l135.5-135.5a23.9 23.9 0 0133.9 0l17 17a23.9 23.9 0 010 33.9L226.9 256z"
      opacity={0.4}
    />
    <path
      d="M142.1 239l135.5-135.5a23.9 23.9 0 0133.9 0l17 17a23.9 23.9 0 010 33.9L226.9 256l101.6 101.6a23.9 23.9 0 010 33.9l-17 17a23.9 23.9 0 01-33.9 0L142.1 273a24 24 0 010-34z"
      className="chevron-circle-left_svg__fa-primary"
    />
  </svg>
);

SvgChevronCircleLeft.displayName = "SvgChevronCircleLeft";
SvgChevronCircleLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronCircleLeft;