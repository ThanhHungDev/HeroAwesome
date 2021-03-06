import * as React from "react";

const SvgSlidersVSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zM200 224h-24v180a12 12 0 01-12 12h-40a12 12 0 01-12-12V224H88a23.94 23.94 0 01-24-24v-16a23.94 23.94 0 0124-24h24v-52a12 12 0 0112-12h40a12 12 0 0112 12v52h24a23.94 23.94 0 0124 24v16a23.94 23.94 0 01-24 24zm184 104a23.94 23.94 0 01-24 24h-24v52a12 12 0 01-12 12h-40a12 12 0 01-12-12v-52h-24a23.94 23.94 0 01-24-24v-16a23.94 23.94 0 0124-24h24V108a12 12 0 0112-12h40a12 12 0 0112 12v180h24a23.94 23.94 0 0124 24z"
      opacity={0.4}
    />
    <path
      d="M224 184a23.94 23.94 0 00-24-24H88a23.94 23.94 0 00-24 24v16a23.94 23.94 0 0024 24h112a23.94 23.94 0 0024-24zm136 104H248a23.94 23.94 0 00-24 24v16a23.94 23.94 0 0024 24h112a23.94 23.94 0 0024-24v-16a23.94 23.94 0 00-24-24z"
      className="sliders-v-square_svg__fa-primary"
    />
  </svg>
);

SvgSlidersVSquare.displayName = "SvgSlidersVSquare";
SvgSlidersVSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSlidersVSquare;
