import * as React from "react";

const SvgDrawPolygon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M32 360.58V151.42a64 64 0 0064 0v209.16a64 64 0 00-64 0zM119.42 64a64 64 0 010 64h208.06l-38.41 64A64 64 0 01344 224.94l39-65a64 64 0 01-54.35-96zm209.16 384a64 64 0 0154.35-96l-39-65a64 64 0 01-54.86 33l38.41 64H119.42a64 64 0 010 64z"
      opacity={0.4}
    />
    <path
      d="M64 32a64 64 0 1064 64 64 64 0 00-64-64zm0 80a16 16 0 1116-16 16 16 0 01-16 16zm320 48a64 64 0 10-64-64 64 64 0 0064 64zm0-80a16 16 0 11-16 16 16 16 0 0116-16zM64 352a64 64 0 1064 64 64 64 0 00-64-64zm0 80a16 16 0 1116-16 16 16 0 01-16 16zm320-80a64 64 0 1064 64 64 64 0 00-64-64zm0 80a16 16 0 1116-16 16 16 0 01-16 16zm-32-176a64 64 0 10-64 64 64 64 0 0064-64zm-64 16a16 16 0 1116-16 16 16 0 01-16 16z"
      className="draw-polygon_svg__fa-primary"
    />
  </svg>
);

SvgDrawPolygon.displayName = "SvgDrawPolygon";
SvgDrawPolygon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDrawPolygon;
