import * as React from "react";

const SvgChevronSquareLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM118.059 272.971l135.515 135.515c9.373 9.373 24.569 9.373 33.941 0l16.971-16.971c9.373-9.373 9.373-24.569 0-33.941L202.912 256l101.574-101.573c9.373-9.373 9.373-24.569 0-33.941l-16.971-16.971c-9.373-9.373-24.569-9.373-33.941 0L118.059 239.029c-9.373 9.373-9.373 24.569 0 33.942z" />
  </svg>
);

SvgChevronSquareLeft.displayName = "SvgChevronSquareLeft";
SvgChevronSquareLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronSquareLeft;
