import * as React from "react";

const SvgTypewriter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 192h-32V77.26a32 32 0 00-9.38-22.64L393.38 9.38A32 32 0 00370.73 0H96a32 32 0 00-32 32v160H32a32 32 0 00-32 32v32a32 32 0 0032 32v160a64 64 0 0064 64h320a64 64 0 0064-64V288a32 32 0 0032-32v-32a32 32 0 00-32-32zM128 64h192v48a16 16 0 0016 16h48v64h-18.75a32 32 0 00-22.62 9.37l-13.26 13.26a32 32 0 01-22.62 9.37h-101.5a32 32 0 01-22.62-9.37l-13.26-13.26a32 32 0 00-22.62-9.37H128zm240 232v16a8 8 0 01-8 8h-16a8 8 0 01-8-8v-16a8 8 0 018-8h16a8 8 0 018 8zm-64 64a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8h-16a8 8 0 01-8-8zm-8-40h-16a8 8 0 01-8-8v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8zm-56 40a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8h-16a8 8 0 01-8-8zm-8-40h-16a8 8 0 01-8-8v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8zm-56 40a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8h-16a8 8 0 01-8-8zm-8-40h-16a8 8 0 01-8-8v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8zm-64 0H88a8 8 0 01-8-8v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8zm32 64h-16a8 8 0 01-8-8v-16a8 8 0 018-8h16a8 8 0 018 8v16a8 8 0 01-8 8zm232 56a8 8 0 01-8 8H152a8 8 0 01-8-8v-16a8 8 0 018-8h208a8 8 0 018 8zm32-64a8 8 0 01-8 8h-16a8 8 0 01-8-8v-16a8 8 0 018-8h16a8 8 0 018 8zm32-64a8 8 0 01-8 8h-16a8 8 0 01-8-8v-16a8 8 0 018-8h16a8 8 0 018 8z" />
  </svg>
);

SvgTypewriter.displayName = "SvgTypewriter";
SvgTypewriter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTypewriter;