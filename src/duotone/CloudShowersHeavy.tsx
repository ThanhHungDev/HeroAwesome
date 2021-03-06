import * as React from "react";

const SvgCloudShowersHeavy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M183.9 370.1a15.88 15.88 0 00-21.8 6l-64 112a15.92 15.92 0 006 21.8 16 16 0 0021.8-6l64-112a16 16 0 00-6-21.8zm96 0a15.88 15.88 0 00-21.8 6l-64 112a15.92 15.92 0 006 21.8 16 16 0 0021.8-6l64-112a16 16 0 00-6-21.8zm-192 0a15.88 15.88 0 00-21.8 6l-64 112a15.92 15.92 0 006 21.8 16 16 0 0021.8-6l64-112a16 16 0 00-5.99-21.8zm384 0a15.88 15.88 0 00-21.8 6l-64 112a15.92 15.92 0 006 21.8 16 16 0 0021.8-6l64-112a16 16 0 00-6.01-21.8zm-96 0a15.88 15.88 0 00-21.8 6l-64 112a15.92 15.92 0 006 21.8 16 16 0 0021.8-6l64-112a16 16 0 00-6.01-21.8z"
      opacity={0.4}
    />
    <path
      d="M512 224a96 96 0 01-96 96H96a96 96 0 01-96-96c0-42.5 27.8-78.2 66.1-90.8A113.72 113.72 0 0164 112 112 112 0 01176 0c43.3 0 80.4 24.8 99 60.8C289.7 43.3 311.4 32 336 32a80 80 0 0180 80 78.09 78.09 0 01-1.6 16.2c.5 0 1-.2 1.6-.2a96 96 0 0196 96z"
      className="cloud-showers-heavy_svg__fa-primary"
    />
  </svg>
);

SvgCloudShowersHeavy.displayName = "SvgCloudShowersHeavy";
SvgCloudShowersHeavy.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudShowersHeavy;
