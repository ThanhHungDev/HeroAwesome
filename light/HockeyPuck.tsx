import * as React from "react";

const SvgHockeyPuck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 544 512" {...props}>
    <path d="M272 64C141 64 0 99 0 176v144c0 84 136.8 128 272 128s272-44 272-128V176c0-77-141-112-272-112zm240 256c0 53-107.5 96-240 96S32 373 32 320v-87.7c95.7 74 383.6 74.5 480 0V320zm-240-64c-132.5 0-240-35.8-240-80s107.5-80 240-80 240 35.8 240 80-107.5 80-240 80z" />
  </svg>
);

SvgHockeyPuck.displayName = "SvgHockeyPuck";
SvgHockeyPuck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHockeyPuck;