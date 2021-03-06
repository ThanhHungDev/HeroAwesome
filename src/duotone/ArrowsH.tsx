import * as React from "react";

const SvgArrowsH = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M405.66 288H106.34l-33.77-32 33.77-32h299.32l33.77 32z"
      opacity={0.4}
    />
    <path
      d="M358.59 146.37a23.93 23.93 0 00.94 33.92l79.9 75.71-79.9 75.71a23.93 23.93 0 00-.94 33.92L369.9 377a24.15 24.15 0 0034.1 0l98.65-98.36a31.92 31.92 0 000-45.24L404 135a24.15 24.15 0 00-34.05 0zM153.41 365.63a23.93 23.93 0 00-.94-33.92L72.57 256l79.9-75.71a23.93 23.93 0 00.94-33.92L142.1 135a24.15 24.15 0 00-34 0L9.4 233.38a31.92 31.92 0 000 45.24L108.05 377a24.15 24.15 0 0034.05 0z"
      className="arrows-h_svg__fa-primary"
    />
  </svg>
);

SvgArrowsH.displayName = "SvgArrowsH";
SvgArrowsH.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowsH;
