import * as React from "react";

const SvgCookie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M510.37 254.78l-12.08-76.26a132.53 132.53 0 00-37.16-73l-54.76-54.7a132 132 0 00-72.7-37L257 1.62a131.88 131.88 0 00-80.52 12.76l-69.14 35.21a132.35 132.35 0 00-57.79 57.8l-35.1 68.88a132.63 132.63 0 00-12.82 80.94l12.08 76.28a132.56 132.56 0 0037.16 72.95l54.76 54.75a132.12 132.12 0 0072.7 37.05L255 510.38a132 132 0 0080.52-12.75l69.11-35.21a132.35 132.35 0 0057.79-57.8l35.1-68.87a132.72 132.72 0 0012.85-80.97zM176 368a32 32 0 1132-32 32 32 0 01-32 32zm32-160a32 32 0 1132-32 32 32 0 01-32 32zm160 128a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M368 272a32 32 0 1032 32 32 32 0 00-32-32zM208 144a32 32 0 1032 32 32 32 0 00-32-32zm-32 160a32 32 0 1032 32 32 32 0 00-32-32z"
      className="cookie_svg__fa-primary"
    />
  </svg>
);

SvgCookie.displayName = "SvgCookie";
SvgCookie.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCookie;
