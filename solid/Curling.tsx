import * as React from "react";

const SvgCurling = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M554.1 192H85.9c13.2-37.2 48.4-64 90.1-64h48v-16C224 50.1 274.1 0 336 0h128c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16-117.7 0-176-11.4-176 48v16h176c41.7 0 76.9 26.8 90.1 64zM0 416c0 53 43 96 96 96h448c53 0 96-43 96-96v-32H0v32zm544-176H96c-53 0-96 43-96 96v16h640v-16c0-53-43-96-96-96z" />
  </svg>
);

SvgCurling.displayName = "SvgCurling";
SvgCurling.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCurling;
