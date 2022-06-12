import * as React from "react";

const SvgArrowToRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M215 99.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l116 115.4H12c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h311.9L208 388.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l148.5-148c4.7-4.7 4.7-12.3 0-17L232 99.5c-4.7-4.7-12.3-4.7-17 0zM448 76v360c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12z" />
  </svg>
);

SvgArrowToRight.displayName = "SvgArrowToRight";
SvgArrowToRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowToRight;
