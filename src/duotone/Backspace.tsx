import * as React from "react";

const SvgBackspace = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M576 64H205.26A64 64 0 00160 82.75L9.38 233.37a32 32 0 000 45.25L160 429.25A64 64 0 00205.25 448H576a64 64 0 0064-64V128a64 64 0 00-64-64zm-84.69 254.06a16 16 0 010 22.63l-22.62 22.62a16 16 0 01-22.63 0L384 301.25l-62.06 62.06a16 16 0 01-22.63 0l-22.62-22.62a16 16 0 010-22.63L338.75 256l-62.06-62.06a16 16 0 010-22.63l22.62-22.62a16 16 0 0122.63 0L384 210.75l62.06-62.06a16 16 0 0122.63 0l22.62 22.62a16 16 0 010 22.63L429.25 256z"
      opacity={0.4}
    />
    <path
      d="M491.31 318.06a16 16 0 010 22.63l-22.62 22.62a16 16 0 01-22.63 0L384 301.25l-62.06 62.06a16 16 0 01-22.63 0l-22.62-22.62a16 16 0 010-22.63L338.75 256l-62.06-62.06a16 16 0 010-22.63l22.62-22.62a16 16 0 0122.63 0L384 210.75l62.06-62.06a16 16 0 0122.63 0l22.62 22.62a16 16 0 010 22.63L429.25 256z"
      className="backspace_svg__fa-primary"
    />
  </svg>
);

SvgBackspace.displayName = "SvgBackspace";
SvgBackspace.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBackspace;
