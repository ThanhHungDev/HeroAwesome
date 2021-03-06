import * as React from "react";

const SvgMugTea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M595.6 416H12.35c-25 0-11.59 64 36 64h511.36c47.69 0 60.89-64 35.89-64zM192 256h64a32 32 0 0032-32v-66.75a32 32 0 00-9.38-22.62L240 96V32h-32v64l-38.63 38.63a32 32 0 00-9.37 22.62V224a32 32 0 0032 32z"
      opacity={0.4}
    />
    <path
      d="M512 32H240v64l38.62 38.63a32 32 0 019.38 22.62V224a32 32 0 01-32 32h-64a32 32 0 01-32-32v-66.75a32 32 0 019.37-22.62L208 96V32h-87.95a23.94 23.94 0 00-24 24v232a96 96 0 0096 96H384a96 96 0 0096-96h32a128 128 0 000-256zm0 192h-32V96h32a64 64 0 010 128z"
      className="mug-tea_svg__fa-primary"
    />
  </svg>
);

SvgMugTea.displayName = "SvgMugTea";
SvgMugTea.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMugTea;
