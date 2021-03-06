import * as React from "react";

const SvgSuperscript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M336 96h-67a16 16 0 00-13.14 6.87l-79.9 115-79.9-115A16 16 0 0083 96H16a16 16 0 00-16 16v48a16 16 0 0016 16h33.48l77.81 112-77.81 112H16a16 16 0 00-16 16v48a16 16 0 0016 16h67a16 16 0 0013.14-6.87l79.9-115 79.9 115A16 16 0 00269 480h67a16 16 0 0016-16v-48a16 16 0 00-16-16h-33.48l-77.81-112 77.81-112H336a16 16 0 0016-16v-48a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M496 192h-16V48a16 16 0 00-16-16h-48a16 16 0 00-14.29 8.83l-16 32A16 16 0 00400 96h16v96h-16a16 16 0 00-16 16v32a16 16 0 0016 16h96a16 16 0 0016-16v-32a16 16 0 00-16-16z"
      className="superscript_svg__fa-primary"
    />
  </svg>
);

SvgSuperscript.displayName = "SvgSuperscript";
SvgSuperscript.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSuperscript;
