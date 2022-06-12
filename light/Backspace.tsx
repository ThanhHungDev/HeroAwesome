import * as React from "react";

const SvgBackspace = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M469.66 181.65l-11.31-11.31c-3.12-3.12-8.19-3.12-11.31 0L384 233.37l-63.03-63.03c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31L361.38 256l-63.03 63.03c-3.12 3.12-3.12 8.19 0 11.31l11.31 11.31c3.12 3.12 8.19 3.12 11.31 0L384 278.63l63.03 63.03c3.12 3.12 8.19 3.12 11.31 0l11.31-11.31c3.12-3.12 3.12-8.19 0-11.31L406.63 256l63.03-63.03a8.015 8.015 0 000-11.32zM576 64H205.26C188.28 64 172 70.74 160 82.74L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm32 320c0 17.64-14.36 32-32 32H205.26c-8.55 0-16.58-3.33-22.63-9.37L32 256l150.63-150.63c6.04-6.04 14.08-9.37 22.63-9.37H576c17.64 0 32 14.36 32 32v256z" />
  </svg>
);

SvgBackspace.displayName = "SvgBackspace";
SvgBackspace.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBackspace;
