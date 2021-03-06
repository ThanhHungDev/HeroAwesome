import * as React from "react";

const SvgStrikethrough = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 240v32a16 16 0 01-16 16H16a16 16 0 01-16-16v-32a16 16 0 0116-16h480a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M410.15 320a114.16 114.16 0 015.27 24.35A123.69 123.69 0 01292.45 480h-68A128 128 0 01110 409.24l-.52-1a16 16 0 017.15-21.47l42.94-21.47a16 16 0 0121.47 7.16A49.87 49.87 0 00225.66 400h66.79A43.59 43.59 0 00336 356.45 43 43 0 00315.76 320zM293.9 224l-87.17-26.83A43.55 43.55 0 01219.55 112h66.79A49.86 49.86 0 01331 139.57a16 16 0 0021.47 7.16l42.94-21.47a16 16 0 007.15-21.46l-.52-1A128 128 0 00287.51 32h-68a123.68 123.68 0 00-123 135.64c2 20.89 10.1 39.83 21.78 56.36z"
      className="strikethrough_svg__fa-primary"
    />
  </svg>
);

SvgStrikethrough.displayName = "SvgStrikethrough";
SvgStrikethrough.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStrikethrough;
