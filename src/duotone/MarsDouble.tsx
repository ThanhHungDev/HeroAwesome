import * as React from "react";

const SvgMarsDouble = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M380.7 246l48.7-48.7-16.9-16.9a12 12 0 018.5-20.5h79a12.06 12.06 0 0112 12.1v79a12 12 0 01-12.1 12 11.73 11.73 0 01-8.4-3.5l-16.9-16.9-48.7 48.7a144 144 0 11-265.1 91.8 174.49 174.49 0 0063.3-18.4c-.1 1-.1 2.1-.1 3.2a80 80 0 1080-80c-1 0-2.1.1-3.2.1a176.47 176.47 0 0018.4-63.3 144.29 144.29 0 0161.5 21.3z"
      opacity={0.4}
    />
    <path
      d="M340 0h-79a12 12 0 00-8.5 20.5l16.9 16.9-48.7 48.7a143.94 143.94 0 1045.2 45.2l48.7-48.7 16.9 16.9A12 12 0 00352 91V12a12 12 0 00-12-12zM144 288a80 80 0 1180-80 80.11 80.11 0 01-80 80z"
      className="mars-double_svg__fa-primary"
    />
  </svg>
);

SvgMarsDouble.displayName = "SvgMarsDouble";
SvgMarsDouble.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMarsDouble;
