import * as React from "react";

const SvgLevelUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 352 512" {...props}>
    <path
      d="M68 432h84V139.31l40-43.23 40 43.21V488a24 24 0 01-24 24H12a12 12 0 01-8.48-20.48l56-56A12 12 0 0168 432z"
      opacity={0.4}
    />
    <path
      d="M345 178.76l-22 22.17a23.93 23.93 0 01-33.83.13l-.12-.13c-.21-.21-.42-.43-.62-.65L192 96.08 95.53 200.29c-.2.22-.41.44-.62.65a23.93 23.93 0 01-33.83.13.53.53 0 00-.13-.13L39 178.76a24.22 24.22 0 010-34L174.91 7.13a.93.93 0 00.14-.14A24.1 24.1 0 01209 7l.14.14L345 144.72a24.22 24.22 0 010 34z"
      className="level-up_svg__fa-primary"
    />
  </svg>
);

SvgLevelUp.displayName = "SvgLevelUp";
SvgLevelUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLevelUp;
