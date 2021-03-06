import * as React from "react";

const SvgPortrait = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M336 0H48A48 48 0 000 48v416a48 48 0 0048 48h288a48 48 0 0048-48V48a48 48 0 00-48-48zM192 128a64 64 0 11-64 64 64.06 64.06 0 0164-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5a103 103 0 0079.6 0h5c37.1 0 67.2 25.8 67.2 57.6z"
      opacity={0.4}
    />
    <path
      d="M192 256a64 64 0 10-64-64 64.06 64.06 0 0064 64zm44.8 32h-5a103 103 0 01-79.6 0h-5c-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6z"
      className="portrait_svg__fa-primary"
    />
  </svg>
);

SvgPortrait.displayName = "SvgPortrait";
SvgPortrait.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPortrait;
