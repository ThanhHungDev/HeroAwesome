import * as React from "react";

const SvgMountain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 00-1.17 32.64A32.004 32.004 0 0032 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 00-1.17-32.63zM320 32l102.86 160H313.38L256 249.38l-46.14-46.05L320 32zM32 480l160.19-249.19L256 294.62 326.62 224h116.8L608 480H32z" />
  </svg>
);

SvgMountain.displayName = "SvgMountain";
SvgMountain.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMountain;
