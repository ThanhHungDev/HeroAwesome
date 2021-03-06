import * as React from "react";

const SvgValueAbsolute = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M48 32H16A16 16 0 000 48v416a16 16 0 0016 16h32a16 16 0 0016-16V48a16 16 0 00-16-16zm448 0h-32a16 16 0 00-16 16v416a16 16 0 0016 16h32a16 16 0 0016-16V48a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M377.3 183.22L304.52 256l72.78 72.78a22.88 22.88 0 010 32.35l-16.17 16.17a22.88 22.88 0 01-32.35 0L256 304.52l-72.78 72.78a22.88 22.88 0 01-32.35 0l-16.17-16.17a22.88 22.88 0 010-32.35L207.48 256l-72.78-72.78a22.88 22.88 0 010-32.35l16.17-16.17a22.88 22.88 0 0132.35 0L256 207.48l72.78-72.78a22.88 22.88 0 0132.35 0l16.17 16.17a22.88 22.88 0 010 32.35z"
      className="value-absolute_svg__fa-primary"
    />
  </svg>
);

SvgValueAbsolute.displayName = "SvgValueAbsolute";
SvgValueAbsolute.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgValueAbsolute;
