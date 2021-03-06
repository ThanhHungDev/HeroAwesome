import * as React from "react";

const SvgAngleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
  </svg>
);

SvgAngleDown.displayName = "SvgAngleDown";
SvgAngleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAngleDown;
