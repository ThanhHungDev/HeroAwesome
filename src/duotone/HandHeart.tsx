import * as React from "react";

const SvgHandHeart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M416 112a32.09 32.09 0 00-32 32v72a8 8 0 01-8 8h-16a8 8 0 01-8-8V64a32 32 0 00-64 0v152a8 8 0 01-8 8h-16a8 8 0 01-8-8V32a32 32 0 00-64 0v184a8 8 0 01-8 8h-16a8 8 0 01-8-8V64a32 32 0 00-64 0v241l-23.6-32.5a40 40 0 10-64.7 47.1l125.6 172.7a48.08 48.08 0 0038.8 19.8h197.6a47.93 47.93 0 0046.7-37l26.5-112.7a201.31 201.31 0 005.1-42.3V144a32.09 32.09 0 00-32-32zm-62.9 261.2l-72.6 71.4a12.2 12.2 0 01-17 0l-72.6-71.4a49.59 49.59 0 013.7-74.2c20.5-16.7 51.1-13.7 70 4.8l7.4 7.3 7.4-7.3c18.8-18.5 49.4-21.5 70-4.8a49.66 49.66 0 013.67 74.2z"
      opacity={0.4}
    />
    <path
      d="M194.57 299c20.5-16.7 51.1-13.7 70 4.8l7.4 7.3 7.4-7.3c18.8-18.5 49.4-21.5 70-4.8a49.66 49.66 0 013.7 74.2l-72.6 71.4a12.2 12.2 0 01-17 0l-72.6-71.4a49.59 49.59 0 013.7-74.2z"
      className="hand-heart_svg__fa-primary"
    />
  </svg>
);

SvgHandHeart.displayName = "SvgHandHeart";
SvgHandHeart.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandHeart;
