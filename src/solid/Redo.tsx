import * as React from "react";

const SvgRedo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M500.33 0h-47.41a12 12 0 00-12 12.57l4 82.76A247.42 247.42 0 00256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 00166.18-63.91 12 12 0 00.48-17.43l-34-34a12 12 0 00-16.38-.55A176 176 0 11402.1 157.8l-101.53-4.87a12 12 0 00-12.57 12v47.41a12 12 0 0012 12h200.33a12 12 0 0012-12V12a12 12 0 00-12-12z" />
  </svg>
);

SvgRedo.displayName = "SvgRedo";
SvgRedo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRedo;
