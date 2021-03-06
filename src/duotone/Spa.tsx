import * as React from "react";

const SvgSpa = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M392.33 206.91a298.84 298.84 0 00-60.26 45.17A275.45 275.45 0 00288 302.6a282.66 282.66 0 00-45-51.45 294 294 0 00-59.22-44.39c16.47-70.45 51.75-132.94 96.74-172.07a12 12 0 0115.14 0c44.95 39.16 80.23 101.72 96.67 172.22z"
      opacity={0.4}
    />
    <path
      d="M576 199.82c-.23 27.92-7.13 126.14-88.77 199.3C403.19 481 320 480 288 480s-115.21 1-199.23-80.88C7.14 326 .23 227.74 0 199.82A7.6 7.6 0 017.75 192c29 .13 135 6.16 213.84 83 33.12 29.64 53.41 63.3 66.41 94.86 13.05-31.56 33.29-65.22 66.41-94.85 78.83-76.84 184.8-82.87 213.84-83a7.6 7.6 0 017.75 7.81z"
      className="spa_svg__fa-primary"
    />
  </svg>
);

SvgSpa.displayName = "SvgSpa";
SvgSpa.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpa;
