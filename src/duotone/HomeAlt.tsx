import * as React from "react";

const SvgHomeAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M336 463.58v-95.64a16 16 0 00-16-16h-64a16 16 0 00-16 16v95.71a16 16 0 01-15.92 16l-112.08.29a16 16 0 01-16-16V300.05L280.39 148.2a12.19 12.19 0 0115.3 0L480 299.94v164a16 16 0 01-16 16l-112-.31a16 16 0 01-16-16.05z"
      opacity={0.4}
    />
    <path
      d="M530.92 300.94L295.69 107.2a12.19 12.19 0 00-15.3 0L45.17 300.94a12 12 0 01-16.89-1.64l-25.5-31a12 12 0 011.61-16.89l253.1-208.47a48 48 0 0161 0l253.13 208.47a12 12 0 011.66 16.89l-25.5 31a12 12 0 01-16.86 1.64z"
      className="home-alt_svg__fa-primary"
    />
  </svg>
);

SvgHomeAlt.displayName = "SvgHomeAlt";
SvgHomeAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHomeAlt;
