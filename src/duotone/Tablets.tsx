import * as React from "react";

const SvgTablets = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M363 65.71c-3.5-3.5-9.5-3.2-12.3.8-45.4 62.7-40.5 150.4 15.9 206.9s144.2 61.4 206.9 15.9a8.15 8.15 0 00.8-12.3zm230.4-19.1c-56.5-56.5-144.2-61.4-206.9-16a8.15 8.15 0 00-.8 12.3L597 254.31c3.5 3.5 9.5 3.2 12.3-.8 45.5-62.7 40.6-150.4-15.9-206.9z"
      opacity={0.4}
    />
    <path
      d="M311.6 368H8.4c-5 0-9.1 4.5-8.3 9.3C12.5 453.51 78.9 512 160 512s147.5-58.5 159.9-134.7c.8-4.79-3.3-9.3-8.3-9.3zM8.4 336h303.3c5 0 9.1-4.5 8.3-9.3C307.5 250.51 241.1 192 160 192S12.5 250.51.1 326.71c-.8 4.8 3.3 9.29 8.3 9.29z"
      className="tablets_svg__fa-primary"
    />
  </svg>
);

SvgTablets.displayName = "SvgTablets";
SvgTablets.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTablets;
