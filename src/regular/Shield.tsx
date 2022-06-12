import * as React from "react";

const SvgShield = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M237.5 508.3c11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3l-192-80a48.15 48.15 0 00-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3zM256 48l192 80c0 173.8-98.4 297-192 336-97.5-40.6-192-166.7-192-336l192-80z" />
  </svg>
);

SvgShield.displayName = "SvgShield";
SvgShield.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShield;