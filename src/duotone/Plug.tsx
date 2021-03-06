import * as React from "react";

const SvgPlug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M288 0a32 32 0 00-32 32v128h64V32a32 32 0 00-32-32zM96 0a32 32 0 00-32 32v128h64V32A32 32 0 0096 0z"
      opacity={0.4}
    />
    <path
      d="M384 176v32a16 16 0 01-16 16h-16v32a160.07 160.07 0 01-128 156.8V512h-64v-99.2A160.07 160.07 0 0132 256v-32H16a16 16 0 01-16-16v-32a16 16 0 0116-16h352a16 16 0 0116 16z"
      className="plug_svg__fa-primary"
    />
  </svg>
);

SvgPlug.displayName = "SvgPlug";
SvgPlug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlug;
