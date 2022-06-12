import * as React from "react";

const SvgMonument = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M368 416h-48l-30.86-315.26a31.97 31.97 0 00-9.21-19.44L203.31 4.69C200.19 1.56 196.09 0 192 0s-8.19 1.56-11.31 4.69L104.08 81.3a31.97 31.97 0 00-9.21 19.44L64 416H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h352c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zM126.71 103.92l65.3-65.3 65.29 65.23L287.85 416H96.15l30.56-312.08zM352 480H32v-32h320v32zM232 256h-80c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z" />
  </svg>
);

SvgMonument.displayName = "SvgMonument";
SvgMonument.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMonument;
