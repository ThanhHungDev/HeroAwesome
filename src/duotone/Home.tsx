import * as React from "react";

const SvgHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M336 463.59V368a16 16 0 00-16-16h-64a16 16 0 00-16 16v95.71a16 16 0 01-15.92 16L112 480a16 16 0 01-16-16V300.06l184.39-151.85a12.19 12.19 0 0115.3 0L480 300v164a16 16 0 01-16 16l-112-.31a16 16 0 01-16-16.1z"
      opacity={0.4}
    />
    <path
      d="M573.32 268.35l-25.5 31a12 12 0 01-16.9 1.65L295.69 107.21a12.19 12.19 0 00-15.3 0L45.17 301a12 12 0 01-16.89-1.65l-25.5-31a12 12 0 011.61-16.89L257.49 43a48 48 0 0161 0L408 116.61V44a12 12 0 0112-12h56a12 12 0 0112 12v138.51l83.6 68.91a12 12 0 011.72 16.93z"
      className="home_svg__fa-primary"
    />
  </svg>
);

SvgHome.displayName = "SvgHome";
SvgHome.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHome;
