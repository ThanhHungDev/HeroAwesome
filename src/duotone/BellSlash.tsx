import * as React from "react";

const SvgBellSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M370 416H128.1c-19.12 0-32-15.6-32.1-32a31.24 31.24 0 018.61-21.71c16.21-17.42 44-42.79 52.62-110.75zm173.64-27.59A32.49 32.49 0 00544 384a31.23 31.23 0 00-8.61-21.71c-19.32-20.76-55.47-52-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32a32 32 0 10-64 0v20.84c-40.31 8.37-74.89 30.89-97.9 62.33zM320 512a64 64 0 0064-64H256a64 64 0 0064 64z"
      opacity={0.4}
    />
    <path
      d="M633.82 458.09L45.47 3.38A16 16 0 0023 6.17L3.37 31.46a16 16 0 002.81 22.45l588.34 454.71a16 16 0 0022.48-2.79l19.64-25.27a16 16 0 00-2.82-22.47z"
      className="bell-slash_svg__fa-primary"
    />
  </svg>
);

SvgBellSlash.displayName = "SvgBellSlash";
SvgBellSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBellSlash;
