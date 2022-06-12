import * as React from "react";

const SvgMountains = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M635.73 406.91l-194.04-297.6C435.9 100.44 425.95 96 416 96c-9.95 0-19.9 4.44-25.69 13.31l-52 79.76-70.79-110.55C261.32 68.84 250.66 64 240 64s-21.32 4.84-27.52 14.52L4.58 403.18C-7.99 422.81 6.81 448 30.92 448h580.22c22.5 0 36.32-23.09 24.59-41.09zM33.71 417.02L239.03 96.17c.08-.04.44-.17.97-.17l.57-.22L445.63 416l-411.92 1.02zM479.65 416c-.39-4.33-1.58-8.7-4.22-12.82L357.24 218.62 416 128.51 603.45 416h-123.8z" />
  </svg>
);

SvgMountains.displayName = "SvgMountains";
SvgMountains.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMountains;