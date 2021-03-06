import * as React from "react";

const SvgPenSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-97.8 210L166.5 377.7l-57.1 6.3a12.11 12.11 0 01-13.3-13.3l6.3-57.1 135.7-135.7a6.13 6.13 0 018.6.1l55.5 55.5a6.1 6.1 0 010 8.5zm42.8-43l-23.1 23.1a6.1 6.1 0 01-8.5 0l-55.5-55.5a6.1 6.1 0 010-8.5L281 135a23.9 23.9 0 0133.9 0l30.1 30.1a24.08 24.08 0 010 33.9z"
      opacity={0.4}
    />
    <path
      d="M345 165.1L314.9 135a23.9 23.9 0 00-33.9 0l-23.1 23.1a6.1 6.1 0 000 8.5l55.5 55.5a6.1 6.1 0 008.5 0L345 199a24.08 24.08 0 000-33.9zM246.7 178a6.13 6.13 0 00-8.6-.1L102.4 313.6l-6.3 57.1a12.11 12.11 0 0013.3 13.3l57.1-6.3L302.2 242a6.1 6.1 0 000-8.5z"
      className="pen-square_svg__fa-primary"
    />
  </svg>
);

SvgPenSquare.displayName = "SvgPenSquare";
SvgPenSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPenSquare;
