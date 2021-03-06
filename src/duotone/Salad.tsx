import * as React from "react";

const SvgSalad = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M416 96c2.65 0 5.12.62 7.73.78C406.14 76.87 380.69 64 352 64a95.2 95.2 0 00-25.15 3.75 111.94 111.94 0 00-205.7 0A95.2 95.2 0 0096 64a96 96 0 000 192h73.37l-87-87a8 8 0 010-11.31l11.32-11.29a8 8 0 0111.31 0l103 103V104a8 8 0 018-8h16a8 8 0 018 8v152h52.54a126.78 126.78 0 01-4.54-32A128.14 128.14 0 01416 96zm33.25 38a95.3 95.3 0 00-123.37 122h169.29a48.23 48.23 0 0110.57 1.24A95.86 95.86 0 00449.25 134z"
      opacity={0.4}
    />
    <path
      d="M384 468.52V480a32 32 0 01-32 32H160a32 32 0 01-32-32v-11.28C58.27 444.26 6.69 381.24.06 304.87-.74 295.75 7 288 16.17 288h479c9.15 0 16.89 7.72 16.1 16.84C504.66 381 453.4 443.9 384 468.52z"
      className="salad_svg__fa-primary"
    />
  </svg>
);

SvgSalad.displayName = "SvgSalad";
SvgSalad.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSalad;
