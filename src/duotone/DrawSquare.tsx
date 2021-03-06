import * as React from "react";

const SvgDrawSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M32 360.58V151.42a64 64 0 0064 0v209.16a64 64 0 00-64 0zM119.42 64a64 64 0 010 64h209.16a64 64 0 010-64zM384 160a63.68 63.68 0 01-32-8.58v209.16a64 64 0 0164 0V151.42a63.68 63.68 0 01-32 8.58zm-55.42 288a64 64 0 010-64H119.42a64 64 0 010 64z"
      opacity={0.4}
    />
    <path
      d="M64 32a64 64 0 1064 64 64 64 0 00-64-64zm0 80a16 16 0 1116-16 16 16 0 01-16 16zm320 48a64 64 0 10-64-64 64 64 0 0064 64zm0-80a16 16 0 11-16 16 16 16 0 0116-16zm0 272a64 64 0 1064 64 64 64 0 00-64-64zm0 80a16 16 0 1116-16 16 16 0 01-16 16zM64 352a64 64 0 1064 64 64 64 0 00-64-64zm0 80a16 16 0 1116-16 16 16 0 01-16 16z"
      className="draw-square_svg__fa-primary"
    />
  </svg>
);

SvgDrawSquare.displayName = "SvgDrawSquare";
SvgDrawSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDrawSquare;
