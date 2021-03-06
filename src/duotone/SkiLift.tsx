import * as React from "react";

const SvgSkiLift = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M488 288a24.07 24.07 0 00-24 24 33.54 33.54 0 01-21.8 31.3L111.65 465.5a24 24 0 1016.6 45l330.5-122.1A81.87 81.87 0 00512 312a24 24 0 00-24-24zM112 128a48 48 0 10-48-48 48 48 0 0048 48zm79.6 253.4a24 24 0 10-15.2-45.6L158 342a40 40 0 01-48.7-20.7l-63.6-133A24 24 0 102.35 209L66 342a88.31 88.31 0 0079.5 50c12.55 0 16.95-.9 46.05-10.6zM256 0h-32v184l32-8z"
      opacity={0.4}
    />
    <path
      d="M307.65 222.8a31.61 31.61 0 00-27.5-5.8l-68.3 17-24.1-53.7a48 48 0 10-87.6 39.4L128 287.8c7.9 19.1 22.7 27.6 39.8 23.3L256 289v123.2l64-23.7V248a31.69 31.69 0 00-12.35-25.2z"
      className="ski-lift_svg__fa-primary"
    />
  </svg>
);

SvgSkiLift.displayName = "SvgSkiLift";
SvgSkiLift.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkiLift;
