import * as React from "react";

const SvgRestroom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M112 0a64 64 0 1064 64 64.06 64.06 0 00-64-64zm208 0h-32a16 16 0 00-16 16v480a16 16 0 0016 16h32a16 16 0 0016-16V16a16 16 0 00-16-16zm176 0a64 64 0 1064 64 64.06 64.06 0 00-64-64z"
      opacity={0.4}
    />
    <path
      d="M623.3 354.5l-45.6-185.8c-3.3-13.5-15.5-23-29.8-24.2a95 95 0 01-104 0c-14.3 1.2-26.5 10.7-29.8 24.2l-45.6 185.8C365 369.6 377 384 393.2 384H448v104a23.94 23.94 0 0024 24h48a23.94 23.94 0 0024-24V384h54.8c16.2 0 28.2-14.4 24.5-29.5zM164.1 144.4a94.8 94.8 0 01-104.2 0A47.82 47.82 0 0016 192v136a23.94 23.94 0 0024 24h8v136a23.94 23.94 0 0024 24h80a23.94 23.94 0 0024-24V352h8a23.94 23.94 0 0024-24V192a47.82 47.82 0 00-43.9-47.6z"
      className="restroom_svg__fa-primary"
    />
  </svg>
);

SvgRestroom.displayName = "SvgRestroom";
SvgRestroom.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRestroom;
