import * as React from "react";

const SvgBrain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M272 439.93a71.81 71.81 0 01-140 22.78 70.91 70.91 0 01-84-70.77 72.51 72.51 0 011.42-14.1A80 80 0 010 304c0-29.66 16.34-55.26 40.34-69.07A79.05 79.05 0 0132 200a80 80 0 0149.66-74A63.6 63.6 0 01144 48c.75 0 1.45.2 2.2.22A63.87 63.87 0 01272 64zM576 304c0-29.66-16.34-55.26-40.34-69.07A79.05 79.05 0 00544 200a80 80 0 00-49.66-74A63.6 63.6 0 00432 48c-.75 0-1.45.2-2.2.22A63.87 63.87 0 00304 64v375.9a71.81 71.81 0 00140 22.78 71.73 71.73 0 0082.61-84.87A80 80 0 00576 304z"
      opacity={0.4}
    />
    <path
      d="M304 439.93a8 8 0 01-8 8h-16a8 8 0 01-8-8V72a8 8 0 018-8h16a8 8 0 018 8z"
      className="brain_svg__fa-primary"
    />
  </svg>
);

SvgBrain.displayName = "SvgBrain";
SvgBrain.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBrain;
