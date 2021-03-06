import * as React from "react";

const SvgArrowCircleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm148.3 265L271.6 405.6a23.9 23.9 0 01-33.9 0l-11-10.9a24 24 0 01.4-34.3l75.5-72.4H120a23.94 23.94 0 01-24-24v-16a23.94 23.94 0 0124-24h182.6l-75.5-72.4a24.15 24.15 0 01-.4-34.4l11-10.9a23.9 23.9 0 0133.9 0l132.7 132.8a23.9 23.9 0 010 33.9z"
      opacity={0.4}
    />
    <path
      d="M226.7 117.2l11-10.9a23.9 23.9 0 0133.9 0l132.7 132.8a23.9 23.9 0 010 33.9L271.6 405.6a23.9 23.9 0 01-33.9 0l-11-10.9a24 24 0 01.4-34.3l75.5-72.4H120a23.94 23.94 0 01-24-24v-16a23.94 23.94 0 0124-24h182.6l-75.5-72.4a24.15 24.15 0 01-.4-34.4z"
      className="arrow-circle-right_svg__fa-primary"
    />
  </svg>
);

SvgArrowCircleRight.displayName = "SvgArrowCircleRight";
SvgArrowCircleRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowCircleRight;
