import * as React from "react";

const SvgEar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M192 0C86 0 0 86 0 192v176a144 144 0 00288 0v-9.9c57.33-33.21 96-95.1 96-166.1C384 86 298 0 192 0zm128 200a8 8 0 01-8 8h-16a8 8 0 01-8-8v-8a96 96 0 00-192 0 32 32 0 0032 32h32a64 64 0 010 128h-8a8 8 0 01-8-8v-16a8 8 0 018-8h8a32 32 0 000-64h-32a64.06 64.06 0 01-64-64 128 128 0 01256 0z"
      opacity={0.4}
    />
    <path
      d="M320 200a8 8 0 01-8 8h-16a8 8 0 01-8-8v-8a96 96 0 00-192 0 32 32 0 0032 32h32a64 64 0 010 128h-8a8 8 0 01-8-8v-16a8 8 0 018-8h8a32 32 0 000-64h-32a64.06 64.06 0 01-64-64 128 128 0 01256 0z"
      className="ear_svg__fa-primary"
    />
  </svg>
);

SvgEar.displayName = "SvgEar";
SvgEar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEar;
