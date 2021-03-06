import * as React from "react";

const SvgOtter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M544 192h-22.86l-92.47 49.79.19.39-.86-.18-34.57-70.71L512 112h126.67A96 96 0 01544 192z"
      opacity={0.4}
    />
    <path
      d="M512 352h-28.22l-54.92-109.82-.86-.18-34.57-70.71L512 112h126.67A97 97 0 00640 96V64a32 32 0 00-32-32h-32l-13.25-13.25A64 64 0 00517.49 0H497a64 64 0 00-31.75 8.43L312 96h-56C150 96 64 182 64 288v1.61c0 32.75-16 62.14-39.56 84.89a79.91 79.91 0 00-23.19 71.8C8 485.1 44.15 512 83.53 512H192a32 32 0 000-64H80a16 16 0 010-32h224a16 16 0 0016-16v-16a32 32 0 00-32-32h-64l149.49-80.5L448 416h80a16 16 0 0016-16v-16a32 32 0 00-32-32zm0-304a16 16 0 11-16 16 16 16 0 0116-16z"
      className="otter_svg__fa-primary"
    />
  </svg>
);

SvgOtter.displayName = "SvgOtter";
SvgOtter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOtter;
