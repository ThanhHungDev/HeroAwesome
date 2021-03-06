import * as React from "react";

const SvgSocks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M160 0a32 32 0 00-32 32v32h160V32a63.12 63.12 0 018-30.38C293.39.92 290.84 0 288 0zm-32 272l-86.65 64.6C2 366.15-12.52 421 12.13 463.65A96.77 96.77 0 0096.07 512a95.62 95.62 0 0057.52-19.2l21.86-16.39C145.6 421 161.91 350.55 214.65 311L288 256v-96H128zm0-144h160V96H128zm192-64v32h192V64zm0 96h192v-32H320z"
      opacity={0.4}
    />
    <path
      d="M288 64H128v32h160zm0 64H128v32h160zm32 144l-86.13 64.6C194.46 366.15 180 421 204.65 463.65a96 96 0 00131 35.67 98 98 0 009.95-6.54l115.2-86.4A128 128 0 00512 304V160H320zm0-144h192V96H320zM480 0H352a32 32 0 00-32 32v32h192V32a32 32 0 00-32-32z"
      className="socks_svg__fa-primary"
    />
  </svg>
);

SvgSocks.displayName = "SvgSocks";
SvgSocks.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSocks;
