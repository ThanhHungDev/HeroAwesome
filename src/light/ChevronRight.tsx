import * as React from "react";

const SvgChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z" />
  </svg>
);

SvgChevronRight.displayName = "SvgChevronRight";
SvgChevronRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronRight;
