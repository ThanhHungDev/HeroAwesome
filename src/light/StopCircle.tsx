import * as React from "react";

const SvgStopCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm296-96H176c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16zm-16 160H192V192h128v128z" />
  </svg>
);

SvgStopCircle.displayName = "SvgStopCircle";
SvgStopCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStopCircle;
