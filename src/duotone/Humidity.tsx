import * as React from "react";

const SvgHumidity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M223.9 22.09c-8.7-28.8-53.9-30.1-63.8 0C109.1 179.79 0 222.69 0 333.9 0 432.3 85.9 512 192 512s192-79.7 192-178.1c0-111.71-108.9-153.31-160.1-311.81zM96 288a32 32 0 1132 32 32 32 0 01-32-32zm49.5 131.8a7.87 7.87 0 01-11.2 1.2l-12.5-10a8 8 0 01-1.2-11.2l118-147.51a8 8 0 0111.2-1.2l12.5 10a7.87 7.87 0 011.2 11.2zM256 416a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M128 256a32 32 0 1032 32 32 32 0 00-32-32zm128 96a32 32 0 1032 32 32 32 0 00-32-32z"
      className="humidity_svg__fa-primary"
    />
  </svg>
);

SvgHumidity.displayName = "SvgHumidity";
SvgHumidity.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHumidity;
