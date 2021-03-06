import * as React from "react";

const SvgClouds = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M161.6 288H96a96 96 0 010-192c.6 0 1.1.2 1.6.2C105.3 41.9 151.6 0 208 0a111.61 111.61 0 01104.5 72.7A95.07 95.07 0 01352 64a96 96 0 0196 96 93 93 0 01-7 34.7 110.5 110.5 0 00-31.6 11.8A142.54 142.54 0 00304 160c-73.9 0-134.3 56.2-142.4 128z"
      opacity={0.4}
    />
    <path
      d="M640 416a96 96 0 01-96 96H224a96 96 0 01-96-96c0-42.5 27.8-78.2 66.1-90.8A113.72 113.72 0 01192 304a111.94 111.94 0 01112-112c43.2 0 80.4 24.9 99 60.8 14.7-17.5 36.4-28.8 61-28.8a80 80 0 0180 80 78.09 78.09 0 01-1.6 16.2c.5 0 1-.2 1.6-.2a96 96 0 0196 96z"
      className="clouds_svg__fa-primary"
    />
  </svg>
);

SvgClouds.displayName = "SvgClouds";
SvgClouds.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClouds;
