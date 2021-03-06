import * as React from "react";

const SvgArrowCircleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm160 256a23.94 23.94 0 01-24 24H209.4l75.5 72.4a24 24 0 01.4 34.3l-11 10.9a23.9 23.9 0 01-33.9 0L107.7 272.9a23.9 23.9 0 010-33.9l132.7-132.6a23.9 23.9 0 0133.9 0l11 10.9a24 24 0 01-.4 34.3L209.4 224H392a23.94 23.94 0 0124 24z"
      opacity={0.4}
    />
    <path
      d="M285.3 394.7l-11 10.9a23.9 23.9 0 01-33.9 0L107.7 272.9a23.9 23.9 0 010-33.9l132.7-132.6a23.9 23.9 0 0133.9 0l11 10.9a24 24 0 01-.4 34.3L209.4 224H392a23.94 23.94 0 0124 24v16a23.94 23.94 0 01-24 24H209.4l75.5 72.4a24 24 0 01.4 34.3z"
      className="arrow-circle-left_svg__fa-primary"
    />
  </svg>
);

SvgArrowCircleLeft.displayName = "SvgArrowCircleLeft";
SvgArrowCircleLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowCircleLeft;
