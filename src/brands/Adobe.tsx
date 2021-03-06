import * as React from "react";

const SvgAdobe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M315.5 64h170.9v384L315.5 64zm-119 0H25.6v384L196.5 64zM256 206.1L363.5 448h-73l-30.7-76.8h-78.7L256 206.1z" />
  </svg>
);

SvgAdobe.displayName = "SvgAdobe";
SvgAdobe.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAdobe;
