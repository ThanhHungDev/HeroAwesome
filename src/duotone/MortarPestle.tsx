import * as React from "react";

const SvgMortarPestle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M501.54 60.91L402.46 160H251.09L454.9 7.14a35.68 35.68 0 0146.64 53.77z"
      opacity={0.4}
    />
    <path
      d="M16 192h480a16 16 0 0116 16v32a16 16 0 01-16 16h-16c0 81-50.2 150.11-121.13 178.32A128.08 128.08 0 01383.82 493a16.43 16.43 0 01-16.07 19h-223.5a16.43 16.43 0 01-16.07-19 128.29 128.29 0 0124.95-58.69C82.2 406.11 32 337 32 256H16a16 16 0 01-16-16v-32a16 16 0 0116-16z"
      className="mortar-pestle_svg__fa-primary"
    />
  </svg>
);

SvgMortarPestle.displayName = "SvgMortarPestle";
SvgMortarPestle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMortarPestle;
