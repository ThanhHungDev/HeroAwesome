import * as React from "react";

const SvgBellOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M528 64a16.17 16.17 0 007.16-1.69l64-32a16 16 0 00-14.32-28.62l-64 32A16 16 0 00528 64zM80 160H16a16 16 0 000 32h64a16 16 0 000-32zM40.84 30.31l64 32A16.17 16.17 0 00112 64a16 16 0 007.16-30.31l-64-32a16 16 0 00-14.32 28.62zM624 160h-64a16 16 0 000 32h64a16 16 0 000-32zM320 480a32 32 0 01-32-32h-32a64 64 0 10128 0h-32a32 32 0 01-32 32zm160-294.09c0-79.6-63.37-144.5-144-152.36V16a16 16 0 00-32 0v17.56c-80.66 7.85-144 72.75-144 152.35 0 94.4-21.41 122.28-49.35 148.9a46.45 46.45 0 00-11.24 51.24A47.67 47.67 0 00144 416h352a47.66 47.66 0 0044.62-30 46.49 46.49 0 00-11.24-51.22C501.41 308.19 480 280.33 480 185.91zM496 384H144c-14.22 0-21.34-16.47-11.31-26C167.53 324.8 192 287.66 192 185.91 192 118.53 249.22 64 320 64s128 54.52 128 121.91c0 101.34 24.22 138.68 59.28 172.07 10.1 9.58 2.88 26.02-11.28 26.02z" />
  </svg>
);

SvgBellOn.displayName = "SvgBellOn";
SvgBellOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBellOn;