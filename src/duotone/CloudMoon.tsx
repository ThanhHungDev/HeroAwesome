import * as React from "react";

const SvgCloudMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M574 313.47A191.54 191.54 0 01436.9 384a110.41 110.41 0 00-53.5-52.7 94.83 94.83 0 00.6-10.72c0-53-43.1-96.17-96-96.17a95.1 95.1 0 00-36.4 7.21 124.78 124.78 0 00-16.7-14.22 188.15 188.15 0 01-1.8-25.05C233.1 86.06 319.1 0 425 0a197.47 197.47 0 0135.1 3.21c8.2 1.6 10.1 12.62 2.8 16.73a150.63 150.63 0 00-76.1 131c0 94.17 85.4 165.7 178.5 148a9 9 0 018.7 14.53z"
      opacity={0.4}
    />
    <path
      d="M416 432a80 80 0 01-80 80H96a96 96 0 01-96-96c0-41.9 27.1-77.2 64.6-90.3-.1-1.9-.6-3.7-.6-5.7a96 96 0 0196-96c36.2 0 67.4 20.3 83.7 49.9a63.83 63.83 0 0199.1 78.8c40.9 3.5 73.2 37.4 73.2 79.3z"
      className="cloud-moon_svg__fa-primary"
    />
  </svg>
);

SvgCloudMoon.displayName = "SvgCloudMoon";
SvgCloudMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudMoon;
