import * as React from "react";

const SvgRadiation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path d="M296 255.82a48 48 0 11-48-48 48 48 0 0148 48z" opacity={0.4} />
    <path
      d="M125.23 452c-4.8 7.7-2.4 18.1 5.6 22.4a246.73 246.73 0 00234.36 0c8-4.3 10.4-14.8 5.6-22.4l-80.38-128.48a78.67 78.67 0 01-84.78 0zm-109-196.18h151.59c0-28.59 15.2-53.49 37.8-67.69L125.23 59.74c-4.8-7.7-15.3-10.2-22.7-4.8C44.44 96.94 5.14 163.33 0 239.12c-.6 9 7.1 16.7 16.2 16.7zm312 0h151.56c9.1 0 16.79-7.7 16.2-16.8-5.1-75.79-44.4-142.18-102.49-184.18-7.4-5.3-17.9-2.9-22.7 4.8L290.41 188c22.6 14.3 37.79 39.2 37.79 67.79z"
      className="radiation_svg__fa-primary"
    />
  </svg>
);

SvgRadiation.displayName = "SvgRadiation";
SvgRadiation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadiation;
