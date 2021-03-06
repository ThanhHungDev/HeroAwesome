import * as React from "react";

const SvgSword = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M267.88 340.11l-96-96L400 16 493.73.16a16 16 0 0118.1 18.11L496 112z"
      opacity={0.4}
    />
    <path
      d="M4.06 425a13.91 13.91 0 010-19.64l17.28-17.29a13.92 13.92 0 0116-2.6l29.31 14.63 53.43-53.43-53.39-80.09a16 16 0 012-20.19l18.79-18.8a16 16 0 0122.62 0l174.3 174.3a16 16 0 010 22.63l-18.8 18.79a16 16 0 01-20.18 2l-80.09-53.39-53.43 53.43 14.62 29.26a13.85 13.85 0 01-2.6 16l-17.29 17.29a13.88 13.88 0 01-19.63 0z"
      className="sword_svg__fa-primary"
    />
  </svg>
);

SvgSword.displayName = "SvgSword";
SvgSword.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSword;
