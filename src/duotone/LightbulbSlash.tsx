import * as React from "react";

const SvgLightbulbSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M163.75 94.79C192.16 39.71 249 .2 319.45 0a175.9 175.9 0 01133 291.78c-3.86 4.41-8.24 9.94-12.79 16.25l-197-152.29A80.16 80.16 0 01320 96a16 16 0 100-32 112.16 112.16 0 00-104.22 71zm0 161.77a176 176 0 0023.83 35.22c16.52 18.85 42.36 58.23 52.21 91.45 0 .26.07.52.11.78h88.74zM240 416v38.35a32 32 0 005.41 17.65l17.09 25.69A32 32 0 00289.14 512h61.71a32 32 0 0026.64-14.28L394.58 472a32 32 0 005.36-17.69V439.1L370 416z"
      opacity={0.4}
    />
    <path
      d="M3.37 31.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45z"
      className="lightbulb-slash_svg__fa-primary"
    />
  </svg>
);

SvgLightbulbSlash.displayName = "SvgLightbulbSlash";
SvgLightbulbSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightbulbSlash;
