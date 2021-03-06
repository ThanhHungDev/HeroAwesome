import * as React from "react";

const SvgGrin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168a32 32 0 11-32 32 32 32 0 0132-32zm-160 0a32 32 0 11-32 32 32 32 0 0132-32zm223.8 162.7c-9.3 55-83.2 93.3-143.8 93.3s-134.5-38.3-143.8-93.3a16 16 0 0120.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.3-3.7 22.6 6.1 20.7 17.9z"
      opacity={0.4}
    />
    <path
      d="M168 176a32 32 0 1032 32 32 32 0 00-32-32zm160 0a32 32 0 1032 32 32 32 0 00-32-32z"
      className="grin_svg__fa-primary"
    />
  </svg>
);

SvgGrin.displayName = "SvgGrin";
SvgGrin.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGrin;
