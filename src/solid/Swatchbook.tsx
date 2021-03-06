import * as React from "react";

const SvgSwatchbook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M434.66 167.71L344.5 77.36a31.83 31.83 0 00-45-.07l-.07.07L224 152.88V424l210.66-211.1a32 32 0 000-45.19zM480 320H373.09L186.68 506.51c-2.06 2.07-4.5 3.58-6.68 5.49h300a32 32 0 0032-32V352a32 32 0 00-32-32zM192 32a32 32 0 00-32-32H32A32 32 0 000 32v384a96 96 0 00192 0zM96 440a24 24 0 1124-24 24 24 0 01-24 24zm32-184H64v-64h64zm0-128H64V64h64z" />
  </svg>
);

SvgSwatchbook.displayName = "SvgSwatchbook";
SvgSwatchbook.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSwatchbook;
