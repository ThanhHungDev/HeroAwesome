import * as React from "react";

const SvgSkull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 0C114.6 0 0 100.3 0 224c0 70.1 36.9 132.6 94.5 173.7 9.6 6.9 15.2 18.1 13.5 29.9l-9.4 66.2a15.87 15.87 0 0013.37 18 16.49 16.49 0 002.33.17H192V456a8 8 0 018-8h16a8 8 0 018 8v56h64v-56a8 8 0 018-8h16a8 8 0 018 8v56h77.7a15.87 15.87 0 0015.87-15.87 16.49 16.49 0 00-.17-2.33l-9.4-66.2c-1.7-11.7 3.8-23 13.5-29.9C475.1 356.6 512 294.1 512 224 512 100.3 397.4 0 256 0zm-96 320a64 64 0 1164-64 64 64 0 01-64 64zm192 0a64 64 0 1164-64 64 64 0 01-64 64z"
      opacity={0.4}
    />
    <path
      d="M160 192a64 64 0 1064 64 64 64 0 00-64-64zm192 0a64 64 0 1064 64 64 64 0 00-64-64z"
      className="skull_svg__fa-primary"
    />
  </svg>
);

SvgSkull.displayName = "SvgSkull";
SvgSkull.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkull;
