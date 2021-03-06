import * as React from "react";

const SvgBallPile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M176 168a80 80 0 1080 80 80 80 0 00-80-80zm224 0a80 80 0 1080 80 80 80 0 00-80-80z"
      opacity={0.4}
    />
    <path
      d="M80 352a80 80 0 1080 80 80 80 0 00-80-80zM288 0a80 80 0 1080 80 80 80 0 00-80-80zm0 352a80 80 0 1080 80 80 80 0 00-80-80zm208 0a80 80 0 1080 80 80 80 0 00-80-80z"
      className="ball-pile_svg__fa-primary"
    />
  </svg>
);

SvgBallPile.displayName = "SvgBallPile";
SvgBallPile.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBallPile;
