import * as React from "react";

const SvgAngleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 192 512" {...props}>
    <path d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z" />
  </svg>
);

SvgAngleRight.displayName = "SvgAngleRight";
SvgAngleRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAngleRight;
