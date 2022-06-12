import * as React from "react";

const SvgBowlingBall = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM120 192c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm64-96c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm48 144c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
  </svg>
);

SvgBowlingBall.displayName = "SvgBowlingBall";
SvgBowlingBall.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBowlingBall;
