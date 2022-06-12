import * as React from "react";

const SvgTreeLarge = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M505.3 460.4L445.9 384h2.1c12.1 0 23.2-6.8 28.6-17.7 5.4-10.8 4.3-23.8-3-33.5l-82.2-109.7c9.3-2.2 17.2-8.5 21.5-17.3 5.3-11.1 3.8-24.2-3.9-33.9L281 12c-6.1-7.6-15.3-12-25-12s-18.9 4.4-25 12L103 172c-7.7 9.6-9.2 22.8-3.9 33.9 4.2 8.8 12.2 15.1 21.5 17.3L38.4 332.8c-7.3 9.7-8.4 22.7-3 33.5C40.8 377.2 51.9 384 64 384h2.1L6.7 460.4c-7.5 9.6-8.9 22.7-3.5 33.7S19.8 512 32 512h448c12.2 0 23.4-7 28.7-17.9s4.1-24.1-3.4-33.7zM32 480l99.6-128H64l120-160h-56L256 32l128 160h-56l120 160h-67.6L480 480H32z" />
  </svg>
);

SvgTreeLarge.displayName = "SvgTreeLarge";
SvgTreeLarge.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTreeLarge;
