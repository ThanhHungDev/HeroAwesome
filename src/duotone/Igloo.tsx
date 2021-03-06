import * as React from "react";

const SvgIgloo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M384 384v96H192v-96a96 96 0 01192 0z" opacity={0.4} />
    <path
      d="M320 33.9a282 282 0 00-32-1.9A287.48 287.48 0 0048.6 160H320zM96 192H30.3A286.63 286.63 0 000 320h96zM352 39.4V160h175.4A287.83 287.83 0 00352 39.4zM480 320h96a286.63 286.63 0 00-30.3-128H480zm-64 64v96h128a32 32 0 0032-32v-96H411.5c2.6 10.3 4.5 20.9 4.5 32zm32-192H128v128h49.8c22.2-38.1 63-64 110.2-64s88 25.9 110.2 64H448zM0 448a32 32 0 0032 32h128v-96c0-11.1 1.9-21.7 4.5-32H0z"
      className="igloo_svg__fa-primary"
    />
  </svg>
);

SvgIgloo.displayName = "SvgIgloo";
SvgIgloo.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIgloo;
