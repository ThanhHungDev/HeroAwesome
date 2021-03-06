import * as React from "react";

const SvgSausage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M416 64a96 96 0 00-96 96c0 88.22-71.78 160-160 160a96 96 0 000 192 351.79 351.79 0 00352-352 96 96 0 00-96-96zM160 400a16 16 0 010-32c114.69 0 208-93.31 208-208a16 16 0 0132 0c0 132.34-107.66 240-240 240z"
      opacity={0.4}
    />
    <path
      d="M24.18 369A18.36 18.36 0 001 380.59a18.11 18.11 0 00-1 5.79v59.24A18.38 18.38 0 0024.18 463l45.26-15.08a96.4 96.4 0 010-63.88zM451.41 1a18.11 18.11 0 00-5.79-1h-59.24a18.36 18.36 0 00-18.33 18.39 18.68 18.68 0 00.95 5.79l15.08 45.26a96.4 96.4 0 0163.88 0l15-45.27A18.36 18.36 0 00451.41 1zM384 144a16 16 0 00-16 16c0 114.69-93.31 208-208 208a16 16 0 000 32c132.34 0 240-107.66 240-240a16 16 0 00-16-16z"
      className="sausage_svg__fa-primary"
    />
  </svg>
);

SvgSausage.displayName = "SvgSausage";
SvgSausage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSausage;
