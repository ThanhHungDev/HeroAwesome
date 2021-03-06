import * as React from "react";

const SvgTimesCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1a12 12 0 010 17L338 377.6a12 12 0 01-17 0L256 312l-65.1 65.6a12 12 0 01-17 0L134.4 338a12 12 0 010-17l65.6-65-65.6-65.1a12 12 0 010-17l39.6-39.6a12 12 0 0117 0l65 65.7 65.1-65.6a12 12 0 0117 0l39.6 39.6a12 12 0 010 17L312 256z"
      opacity={0.4}
    />
    <path
      d="M377.6 321.1a12 12 0 010 17L338 377.6a12 12 0 01-17 0L256 312l-65.1 65.6a12 12 0 01-17 0L134.4 338a12 12 0 010-17l65.6-65-65.6-65.1a12 12 0 010-17l39.6-39.6a12 12 0 0117 0l65 65.7 65.1-65.6a12 12 0 0117 0l39.6 39.6a12 12 0 010 17L312 256z"
      className="times-circle_svg__fa-primary"
    />
  </svg>
);

SvgTimesCircle.displayName = "SvgTimesCircle";
SvgTimesCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTimesCircle;
