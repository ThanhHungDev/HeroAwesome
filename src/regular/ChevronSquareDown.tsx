import * as React from "react";

const SvgChevronSquareDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M215.5 348.5L92.7 225.7c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l91.7 91.7 91.7-91.7c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17L232.5 348.5c-4.7 4.7-12.3 4.7-17 0zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
  </svg>
);

SvgChevronSquareDown.displayName = "SvgChevronSquareDown";
SvgChevronSquareDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChevronSquareDown;
