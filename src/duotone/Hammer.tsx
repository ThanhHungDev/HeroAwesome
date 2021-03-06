import * as React from "react";

const SvgHammer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M19.64 405l255.1-238.17a97 97 0 009.85 12l49.14 49.14a97.23 97.23 0 0011.44 9.41L107 492.36A61.84 61.84 0 1119.64 405z"
      opacity={0.4}
    />
    <path
      d="M435.56 261.81l11.31-11.31L418 221.6a63.73 63.73 0 01-61.61-16.35l-49.14-49.14a64 64 0 01-18.75-45.25V92.11L198 46.86a160 160 0 01226.28 0l45.25 45.25a63.73 63.73 0 0116.35 61.61l28.9 28.9 11.31-11.31a16 16 0 0122.63 0l22.63 22.63a16 16 0 010 22.62l-90.51 90.51a16 16 0 01-22.63 0l-22.63-22.63a16 16 0 01-.02-22.63z"
      className="hammer_svg__fa-primary"
    />
  </svg>
);

SvgHammer.displayName = "SvgHammer";
SvgHammer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHammer;
