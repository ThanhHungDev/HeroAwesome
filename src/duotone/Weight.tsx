import * as React from "react";

const SvgWeight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 320A160 160 0 1096 160a160 160 0 00160 160zm-.28-152l33.56-78.3a16 16 0 0129.44 12.59l-33.58 78.33A40 40 0 11255.72 168z"
      opacity={0.4}
    />
    <path
      d="M512 128v320a64.07 64.07 0 01-64 64H64a64.07 64.07 0 01-64-64V128a64.07 64.07 0 0164-64h26a190.6 190.6 0 00-26 96c0 105.87 86.13 192 192 192s192-86.13 192-192a190.6 190.6 0 00-26-96h26a64.07 64.07 0 0164 64zM256 248a40 40 0 0029.14-67.38l33.58-78.33a16 16 0 00-29.44-12.59L255.72 168a40 40 0 00.28 80z"
      className="weight_svg__fa-primary"
    />
  </svg>
);

SvgWeight.displayName = "SvgWeight";
SvgWeight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWeight;
