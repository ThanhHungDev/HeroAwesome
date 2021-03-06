import * as React from "react";

const SvgHandshake = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M0 384h64a32 32 0 0032-32V128.2H0zm48-63.9a16 16 0 11-16 16 16 16 0 0116-16zM457.3 73.4a31.77 31.77 0 00-22.6-9.4h-85.9a32 32 0 00-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4a39.78 39.78 0 00-2.1 56c12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2a16 16 0 0121.6 23.6l-26.1 23.9L504 313.8a72 72 0 017.9 7.7V128z"
      opacity={0.4}
    />
    <path
      d="M544 128.2v223.9a32 32 0 0032 32h64V128.2zm48 223.9a16 16 0 1116-16 16 16 0 01-16 16zm-108.1-13.4L334.6 217.5l-30 27.5a72 72 0 01-97.3-106.1L289.1 64h-83.8a31.94 31.94 0 00-22.6 9.4L128 128v223.9h18.3l90.5 81.9a64 64 0 0090-9.3l.2-.2 17.9 15.5a37.16 37.16 0 0052.3-5.4l31.4-38.6 5.4 4.4a32 32 0 0045-4.7l9.5-11.7a32.06 32.06 0 00-4.6-45.1z"
      className="handshake_svg__fa-primary"
    />
  </svg>
);

SvgHandshake.displayName = "SvgHandshake";
SvgHandshake.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandshake;
