import * as React from "react";

const SvgThunderstormMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M567.94 223.8c-70.4 13.3-135-40.3-135-110.8a112.62 112.62 0 0157.5-98.1 6.74 6.74 0 00-2.1-12.5 146.75 146.75 0 00-26.5-2.4c-77.91 0-141.11 61.2-144.41 137.9a111.46 111.46 0 0158.9 61.7 111.82 111.82 0 0170.21 86.8c5.1.5 10 1.5 15.2 1.5a145 145 0 00112.6-53.3c4.2-4.8-.2-12-6.4-10.8zM276 336h-57.68l17.3-64.9A12 12 0 00224 256h-68a12.06 12.06 0 00-11.9 10.4l-16 120A12 12 0 00140 400h59.3l-23 97.2a12 12 0 0022.1 8.8l88-152a12 12 0 00-10.4-18z"
      opacity={0.4}
    />
    <path
      d="M350.58 225.5A79.91 79.91 0 01336 384h-30l8.11-14A44 44 0 00276 304h-16l6.6-24.7a44 44 0 00-42.55-55.3H156a44.26 44.26 0 00-43.71 38.2l-16 120a10.82 10.82 0 010 1.8H80a80 80 0 01-15.8-158.4c0-.5-.2-1.1-.2-1.6a95.85 95.85 0 01173.74-56 79 79 0 0134.31-8 80 80 0 0178.51 65.5z"
      className="thunderstorm-moon_svg__fa-primary"
    />
  </svg>
);

SvgThunderstormMoon.displayName = "SvgThunderstormMoon";
SvgThunderstormMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgThunderstormMoon;
