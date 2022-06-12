import * as React from "react";

const SvgCloudDrizzle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M48 360a16 16 0 00-16 16v40a16 16 0 0032 0v-40a16 16 0 00-16-16zm96 80a16 16 0 00-16 16v40a16 16 0 0032 0v-40a16 16 0 00-16-16zm96-80a16 16 0 00-16 16v40a16 16 0 0032 0v-40a16 16 0 00-16-16zm96 80a16 16 0 00-16 16v40a16 16 0 0032 0v-40a16 16 0 00-16-16zm96-80a16 16 0 00-16 16v40a16 16 0 0032 0v-40a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M512 224a96 96 0 01-96 96H96a96 96 0 01-96-96c0-42.5 27.8-78.2 66.1-90.8A113.72 113.72 0 0164 112 111.94 111.94 0 01176 0c43.3 0 80.4 24.8 99 60.8C289.7 43.3 311.4 32 336 32a80 80 0 0180 80 78.09 78.09 0 01-1.6 16.2c.5 0 1-.2 1.6-.2a96 96 0 0196 96z"
      className="cloud-drizzle_svg__fa-primary"
    />
  </svg>
);

SvgCloudDrizzle.displayName = "SvgCloudDrizzle";
SvgCloudDrizzle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudDrizzle;
