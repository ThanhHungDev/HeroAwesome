import * as React from "react";

const SvgPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
  </svg>
);

SvgPlus.displayName = "SvgPlus";
SvgPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPlus;
