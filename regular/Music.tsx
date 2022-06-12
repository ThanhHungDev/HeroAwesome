import * as React from "react";

const SvgMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480.06 0a31.94 31.94 0 00-9.68 1.5l-304 96A32 32 0 00144 128v235.09A109.68 109.68 0 0096 352c-53 0-96 35.81-96 80s43 80 96 80c49.38 0 89.56-31.16 94.91-71.09a38.74 38.74 0 001.06-8.66V256l272-85.91v129A109.78 109.78 0 00416 288c-53 0-96 35.81-96 80s43 80 96 80c49.38 0 89.56-31.19 94.94-71.12a38.94 38.94 0 001-8.22c0-.22.06-.44.06-.66V32a32 32 0 00-31.94-32zM96 464c-28.28 0-48-16.88-48-32s19.72-32 48-32 48 16.84 48 32-19.72 32-48 32zm368-96c0 15.12-19.72 32-48 32s-48-16.88-48-32 19.72-32 48-32 48 16.84 48 32zm0-248.25l-272 85.91v-65.91l272-85.87z" />
  </svg>
);

SvgMusic.displayName = "SvgMusic";
SvgMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMusic;
