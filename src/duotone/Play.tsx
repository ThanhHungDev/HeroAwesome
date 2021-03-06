import * as React from "react";

const SvgPlay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M424.41 214.66L72.41 6.55C43.81-10.34 0 6.05 0 47.87V464c0 37.5 40.69 60.09 72.41 41.3l352-208c31.4-18.54 31.5-64.14 0-82.64zM321.89 283.5L112.28 407.35C91 420 64 404.58 64 379.8V132c0-24.78 27-40.16 48.28-27.54l209.61 123.95a32 32 0 010 55.09z"
      opacity={0.4}
    />
    <path
      d="M112.28 104.48l209.61 123.93a32 32 0 010 55.09L112.28 407.35C91 420 64 404.58 64 379.8V132c0-24.76 27-40.14 48.28-27.52z"
      className="play_svg__fa-primary"
    />
  </svg>
);

SvgPlay.displayName = "SvgPlay";
SvgPlay.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlay;
