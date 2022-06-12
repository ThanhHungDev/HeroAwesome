import * as React from "react";

const SvgShareSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M0 464V112a48 48 0 0148-48h121c12.55 0 16.68 16.83 5.55 22.63a195.1 195.1 0 00-51 37.68 12 12 0 01-8.64 3.69H64v320h320v-68.87a12 12 0 0113.8-11.86 71.73 71.73 0 0034.2-3.38 12 12 0 0116 11.3V464a48 48 0 01-48 48H48a48 48 0 01-48-48z"
      opacity={0.4}
    />
    <path
      d="M424.48 6.56l144 136a24 24 0 010 34.9l-144 136C409.3 327.77 384 317.14 384 296v-72c-144.58 1-205.57 35.12-164.78 171.36 4.49 15-12.84 26.56-25 17.33-39-29.6-74.22-86.22-74.22-143.37C120 125.4 237.6 96.84 384 96V24c0-21.16 25.32-31.76 40.48-17.44z"
      className="share-square_svg__fa-primary"
    />
  </svg>
);

SvgShareSquare.displayName = "SvgShareSquare";
SvgShareSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShareSquare;
