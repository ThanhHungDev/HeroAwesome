import * as React from "react";

const SvgStreetView = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 416c0 53-114.62 96-256 96S0 469 0 416c0-37.95 58.87-70.66 144.1-86.24a63.94 63.94 0 0015.9 13.65v22.94C93.48 375.7 48 394.4 48 416c0 30.93 93.12 56 208 56s208-25.07 208-56c0-21.6-45.48-40.31-112-49.65v-22.94a63.94 63.94 0 0015.9-13.65C453.13 345.34 512 378.05 512 416z"
      opacity={0.4}
    />
    <path
      d="M256 128a64 64 0 10-64-64 64 64 0 0064 64zm48 16h-11.8a85.9 85.9 0 01-72.4 0H208a48 48 0 00-48 48v96a32 32 0 0032 32v96a32 32 0 0032 32h64a32 32 0 0032-32v-96a32 32 0 0032-32v-96a48 48 0 00-48-48z"
      className="street-view_svg__fa-primary"
    />
  </svg>
);

SvgStreetView.displayName = "SvgStreetView";
SvgStreetView.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStreetView;
