import * as React from "react";

const SvgRadio = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M448 128H64a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V192a64 64 0 00-64-64zM80 248a8 8 0 018-8h112a8 8 0 018 8v16a8 8 0 01-8 8H88a8 8 0 01-8-8zm128 144a8 8 0 01-8 8H88a8 8 0 01-8-8v-16a8 8 0 018-8h112a8 8 0 018 8zm16-64a8 8 0 01-8 8H72a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm222.37 8.13a96 96 0 110-32.26 80.62 80.62 0 010 32.26z"
      opacity={0.4}
    />
    <path
      d="M511.4 27.05l-4.33-15.38A16 16 0 00487.33.6L64 128h147.5l288.83-81.21a16 16 0 0011.07-19.74zM352 224a96 96 0 1096 96 96 96 0 00-96-96zm0 144a48 48 0 1148-48 48.05 48.05 0 01-48 48z"
      className="radio_svg__fa-primary"
    />
  </svg>
);

SvgRadio.displayName = "SvgRadio";
SvgRadio.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRadio;
