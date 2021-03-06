import * as React from "react";

const SvgExpandArrowsAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M.05 168V56a23.94 23.94 0 0124-24h112c21.4 0 32.1 25.9 17 41l-36.2 36.2 107.2 107.2L184.4 256 77.15 148.75 41.05 185c-15.05 15.05-41 4.35-41-17zm407 159.1L371 363.25 263.7 256l-39.65 39.65 107.2 107.2-36.2 36.2c-15.1 15.1-4.4 41 17 41h112a23.94 23.94 0 0024-24v-112c0-21.4-25.9-32.05-41-17z"
      opacity={0.4}
    />
    <path
      d="M370.9 148.8L116.8 402.9 153 439c15.1 15.1 4.4 41-17 41H24a23.94 23.94 0 01-24-24V344c0-21.4 25.9-32.1 41-17l36.2 36.2 254.1-254.1L295.1 73c-15.1-15.1-4.4-41 17-41h112a23.94 23.94 0 0124 24v112c0 21.4-25.9 32.1-41 17z"
      className="expand-arrows-alt_svg__fa-primary"
    />
  </svg>
);

SvgExpandArrowsAlt.displayName = "SvgExpandArrowsAlt";
SvgExpandArrowsAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExpandArrowsAlt;
