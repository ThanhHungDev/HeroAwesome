import * as React from "react";

const SvgUserCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96a88 88 0 11-88 88 88 88 0 0188-88zm0 344a191.61 191.61 0 01-146.5-68.2c18.8-35.4 55.6-59.8 98.5-59.8a24.76 24.76 0 017.1 1.1 124.67 124.67 0 0081.8 0 24.76 24.76 0 017.1-1.1c42.9 0 79.7 24.4 98.5 59.8A191.61 191.61 0 01248 448z"
      opacity={0.4}
    />
    <path
      d="M248 280a88 88 0 10-88-88 88 88 0 0088 88zm48 40a24.76 24.76 0 00-7.1 1.1 124.67 124.67 0 01-81.8 0 24.76 24.76 0 00-7.1-1.1c-42.9 0-79.7 24.4-98.5 59.8 68.07 80.91 188.84 91.32 269.75 23.25a192 192 0 0023.25-23.25C375.7 344.4 338.9 320 296 320z"
      className="user-circle_svg__fa-primary"
    />
  </svg>
);

SvgUserCircle.displayName = "SvgUserCircle";
SvgUserCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserCircle;
