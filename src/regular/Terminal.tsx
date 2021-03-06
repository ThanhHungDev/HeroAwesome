import * as React from "react";

const SvgTerminal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M41.678 38.101l209.414 209.414c4.686 4.686 4.686 12.284 0 16.971L41.678 473.899c-4.686 4.686-12.284 4.686-16.971 0L4.908 454.101c-4.686-4.686-4.686-12.284 0-16.971L185.607 256 4.908 74.87c-4.686-4.686-4.686-12.284 0-16.971L24.707 38.1c4.686-4.686 12.284-4.686 16.971.001zM640 468v-28c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z" />
  </svg>
);

SvgTerminal.displayName = "SvgTerminal";
SvgTerminal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTerminal;
