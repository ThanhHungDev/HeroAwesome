import * as React from "react";

const SvgVenusDouble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 176a144 144 0 01-112 140.4V368h36a12 12 0 0112 12v40a12 12 0 01-12 12h-36v36a12 12 0 01-12 12h-40a12 12 0 01-12-12v-36h-36a12 12 0 01-12-12v-40a12 12 0 0112-12h36v-51.6a144.48 144.48 0 01-57.2-27.3 176.57 176.57 0 0032.1-57.1 80 80 0 100-112 174.74 174.74 0 00-32.1-57.1A144.05 144.05 0 01512 176z"
      opacity={0.4}
    />
    <path
      d="M288 176a144 144 0 10-176 140.4V368H76a12 12 0 00-12 12v40a12 12 0 0012 12h36v36a12 12 0 0012 12h40a12 12 0 0012-12v-36h36a12 12 0 0012-12v-40a12 12 0 00-12-12h-36v-51.6A144 144 0 00288 176zm-144 80a80 80 0 1180-80 80.11 80.11 0 01-80 80z"
      className="venus-double_svg__fa-primary"
    />
  </svg>
);

SvgVenusDouble.displayName = "SvgVenusDouble";
SvgVenusDouble.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVenusDouble;
