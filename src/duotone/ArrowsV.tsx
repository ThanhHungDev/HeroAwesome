import * as React from "react";

const SvgArrowsV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path
      d="M160 106.34v299.32l-32 33.77-32-33.77V106.34l32-33.77z"
      opacity={0.4}
    />
    <path
      d="M18.37 153.41a23.93 23.93 0 0033.92-.94L128 72.57l75.71 79.9a23.93 23.93 0 0033.92.94L249 142.1a24.15 24.15 0 000-34L150.62 9.4a31.92 31.92 0 00-45.24 0L7 108.05a24.15 24.15 0 000 34.05zm219.26 205.18a23.93 23.93 0 00-33.92.94L128 439.43l-75.71-79.9a23.93 23.93 0 00-33.92-.94L7 369.9A24.15 24.15 0 007 404l98.36 98.65a31.92 31.92 0 0045.24 0L249 404a24.15 24.15 0 000-34.05z"
      className="arrows-v_svg__fa-primary"
    />
  </svg>
);

SvgArrowsV.displayName = "SvgArrowsV";
SvgArrowsV.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowsV;
