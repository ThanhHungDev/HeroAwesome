import * as React from "react";

const SvgCloudRain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M88 374.22c-12.8 44.4-40 56.39-40 87.69C48 489.6 69.5 512 96 512s48-22.4 48-50.09c0-31.4-27.2-43.09-40-87.69a8.26 8.26 0 00-16 0zm160 0c-12.8 44.4-40 56.39-40 87.69 0 27.69 21.5 50.09 48 50.09s48-22.4 48-50.09c0-31.4-27.2-43.09-40-87.69a8.26 8.26 0 00-16 0zm176 0a8.26 8.26 0 00-16 0c-12.8 44.4-40 56.39-40 87.69 0 27.69 21.5 50.09 48 50.09s48-22.4 48-50.09c0-31.4-27.2-43.09-40-87.69z"
      opacity={0.4}
    />
    <path
      d="M512 224a96 96 0 01-96 96H96a96 96 0 01-96-96c0-42.5 27.8-78.2 66.1-90.8A113.72 113.72 0 0164 112 111.94 111.94 0 01176 0c43.3 0 80.4 24.8 99 60.8C289.7 43.3 311.4 32 336 32a80 80 0 0180 80 78.09 78.09 0 01-1.6 16.2c.5 0 1-.2 1.6-.2a96 96 0 0196 96z"
      className="cloud-rain_svg__fa-primary"
    />
  </svg>
);

SvgCloudRain.displayName = "SvgCloudRain";
SvgCloudRain.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudRain;
