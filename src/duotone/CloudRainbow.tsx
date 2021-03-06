import * as React from "react";

const SvgCloudRainbow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M430.8 304.9a125.07 125.07 0 0126.9 20.3C487.1 292.8 529 272 576 272v-64a223.38 223.38 0 00-156.8 64.3 94.09 94.09 0 0111.6 32.6zM238.6 173.6a142.8 142.8 0 0156.6 31C359.6 119.4 461.3 64 576 64V0C437.1 0 314.2 68.7 238.6 173.6zm87.2 51.5c7.4-.8 36.7-5.4 68.4 18.9A255.37 255.37 0 01576 168v-64c-101.3 0-191.6 47.4-250.2 121.1z"
      opacity={0.4}
    />
    <path
      d="M399.2 325.6c37.6 13 64.8 48.4 64.8 90.4a96 96 0 01-96 96H96a96 96 0 01-96-96c0-50.6 39.2-91.6 88.9-95.3-.2-2.9-.9-5.7-.9-8.7a111.87 111.87 0 01213.9-46 63.81 63.81 0 0198.1 54 53.91 53.91 0 01-.8 5.6z"
      className="cloud-rainbow_svg__fa-primary"
    />
  </svg>
);

SvgCloudRainbow.displayName = "SvgCloudRainbow";
SvgCloudRainbow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudRainbow;
