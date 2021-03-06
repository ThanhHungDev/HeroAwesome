import * as React from "react";

const SvgCctv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M564.8 259.9l-57.2-25.15-153.78 96.11 150.68 66.25a18.74 18.74 0 0024.69-9.61l45.22-102.91a18.74 18.74 0 00-9.61-24.69zM137.81 400H64v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v128a16 16 0 0016 16h32a16 16 0 0016-16v-32h96a32 32 0 0030-20.77l46.85-124.94-59.17-24.51z"
      opacity={0.4}
    />
    <path
      d="M4.23 183L99.57 16.13a32 32 0 0139.67-13.84l378.2 166.29c24.33 9.73 27.29 43 5.08 56.85l-189.29 118.3a32 32 0 01-27.89 2.94L21.08 228.93A32 32 0 014.23 183z"
      className="cctv_svg__fa-primary"
    />
  </svg>
);

SvgCctv.displayName = "SvgCctv";
SvgCctv.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCctv;
