import * as React from "react";

const SvgMix = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M0 64v348.9c0 56.2 88 58.1 88 0V174.3c7.9-52.9 88-50.4 88 6.5v175.3c0 57.9 96 58 96 0V240c5.3-54.7 88-52.5 88 4.3v23.8c0 59.9 88 56.6 88 0V64H0z" />
  </svg>
);

SvgMix.displayName = "SvgMix";
SvgMix.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMix;
