import * as React from "react";

const SvgPlusHexagon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M553.5 231.8l-112-192A48.14 48.14 0 00400 16H176a48.09 48.09 0 00-41.5 23.8l-112 192a48.19 48.19 0 000 48.4l112 192A48.09 48.09 0 00176 496h224a48.13 48.13 0 0041.5-23.8l112-192a48.19 48.19 0 000-48.4zM432 284a12 12 0 01-12 12h-92v92a12 12 0 01-12 12h-56a12 12 0 01-12-12v-92h-92a12 12 0 01-12-12v-56a12 12 0 0112-12h92v-92a12 12 0 0112-12h56a12 12 0 0112 12v92h92a12 12 0 0112 12z"
      opacity={0.4}
    />
    <path
      d="M432 284a12 12 0 01-12 12h-92v92a12 12 0 01-12 12h-56a12 12 0 01-12-12v-92h-92a12 12 0 01-12-12v-56a12 12 0 0112-12h92v-92a12 12 0 0112-12h56a12 12 0 0112 12v92h92a12 12 0 0112 12z"
      className="plus-hexagon_svg__fa-primary"
    />
  </svg>
);

SvgPlusHexagon.displayName = "SvgPlusHexagon";
SvgPlusHexagon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlusHexagon;
