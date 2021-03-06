import * as React from "react";

const SvgArrowCircleUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm149.6 266.3l-10.9 11a24 24 0 01-34.3-.4L288 209.4V392a23.94 23.94 0 01-24 24h-16a23.94 23.94 0 01-24-24V209.4l-72.4 75.5a24.15 24.15 0 01-34.4.4l-10.9-11a23.9 23.9 0 010-33.9l132.8-132.7a23.9 23.9 0 0133.9 0l132.6 132.7a23.9 23.9 0 010 33.9z"
      opacity={0.4}
    />
    <path
      d="M117.2 285.3l-10.9-11a23.9 23.9 0 010-33.9l132.8-132.7a23.9 23.9 0 0133.9 0l132.6 132.7a23.9 23.9 0 010 33.9l-10.9 11a24 24 0 01-34.3-.4L288 209.4V392a23.94 23.94 0 01-24 24h-16a23.94 23.94 0 01-24-24V209.4l-72.4 75.5a24.15 24.15 0 01-34.4.4z"
      className="arrow-circle-up_svg__fa-primary"
    />
  </svg>
);

SvgArrowCircleUp.displayName = "SvgArrowCircleUp";
SvgArrowCircleUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowCircleUp;
