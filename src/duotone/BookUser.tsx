import * as React from "react";

const SvgBookUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z"
      opacity={0.4}
    />
    <path
      d="M96 384h328a24 24 0 0024-24V32a32 32 0 00-32-32H96A96 96 0 000 96v320a96 96 0 0096 96h328a24 24 0 0024-24v-16a24 24 0 00-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zM240 64a64 64 0 11-64 64 64 64 0 0164-64zM128 281.6c0-31.81 30.09-57.6 67.2-57.6h5a103.22 103.22 0 0079.7 0h5c37.11 0 67.2 25.79 67.2 57.6v19.2c0 10.61-10 19.2-22.4 19.2H150.4c-12.4 0-22.4-8.6-22.4-19.2z"
      className="book-user_svg__fa-primary"
    />
  </svg>
);

SvgBookUser.displayName = "SvgBookUser";
SvgBookUser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBookUser;
