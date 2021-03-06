import * as React from "react";

const SvgPalette = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M204.29 5c-99.4 19.4-179.5 99.29-199.1 198.4-37 187 131.7 326.39 258.8 306.69 41.2-6.4 61.4-54.59 42.5-91.69-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.31C511.49 97.13 368.09-26.87 204.29 5zM96 320a32 32 0 1132-32 32 32 0 01-32 32zm32-128a32 32 0 1132-32 32 32 0 01-32 32zm128-64a32 32 0 1132-32 32 32 0 01-32 32zm128 64a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M96 256a32 32 0 1032 32 32 32 0 00-32-32zm32-128a32 32 0 1032 32 32 32 0 00-32-32zm128-64a32 32 0 1032 32 32 32 0 00-32-32zm128 64a32 32 0 1032 32 32 32 0 00-32-32z"
      className="palette_svg__fa-primary"
    />
  </svg>
);

SvgPalette.displayName = "SvgPalette";
SvgPalette.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPalette;
