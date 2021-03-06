import * as React from "react";

const SvgHandshakeAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M640 143.9v191.8a16 16 0 01-16 16h-97.6a63.36 63.36 0 00-22.2-37.9L358.6 195.6l26.1-23.9a16 16 0 00-21.6-23.6l-27 24.7-53 48.5c-.1.1-.3.1-.4.2-21.1 18.9-46.5 7.8-56.1-2.7a39.69 39.69 0 012.1-56c.1-.1.2-.3.3-.4l98.3-90a32 32 0 0121.6-8.4h85.9a31.94 31.94 0 0122.6 9.4L512 128h112a16 16 0 0116 15.9z"
      opacity={0.4}
    />
    <path
      d="M0 335.9V144a16 16 0 0116-16h112l54.7-54.6a31.94 31.94 0 0122.6-9.4h83.8l-81.8 74.9a72 72 0 00-4.4 101.7c14.9 16.3 61.1 41.5 101.7 4.4l30-27.5 149.3 121.2a32.06 32.06 0 014.6 45.1l-9.5 11.7a32 32 0 01-45 4.7l-5.4-4.4-31.4 38.6a37.16 37.16 0 01-52.3 5.4L327 424.3l-.2.2a64 64 0 01-90 9.3l-90.5-81.9H16a16 16 0 01-16-16z"
      className="handshake-alt_svg__fa-primary"
    />
  </svg>
);

SvgHandshakeAlt.displayName = "SvgHandshakeAlt";
SvgHandshakeAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandshakeAlt;
