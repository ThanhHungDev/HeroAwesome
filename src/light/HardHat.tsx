import * as React from "react";

const SvgHardHat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 352v-32c0-101.34-67.66-186.11-160-213.75V96a32 32 0 00-32-32h-64a32 32 0 00-32 32v10.25C99.66 133.89 32 218.66 32 320v32a32 32 0 00-32 32v32a32 32 0 0032 32h448a32 32 0 0032-32v-32a32 32 0 00-32-32zM64 320c0-78.76 48.24-145.4 116.28-174.88l26 104.07A9 9 0 00224 247V96h64v151a9 9 0 0017.7 2.18l26-104.07C399.76 174.6 448 241.24 448 320v32H64zm416 96H32v-32h448z" />
  </svg>
);

SvgHardHat.displayName = "SvgHardHat";
SvgHardHat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHardHat;
