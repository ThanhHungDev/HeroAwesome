import * as React from "react";

const SvgCircleNotch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M288 24.103v8.169a11.995 11.995 0 009.698 11.768C396.638 63.425 472 150.461 472 256c0 118.663-96.055 216-216 216-118.663 0-216-96.055-216-216 0-104.534 74.546-192.509 174.297-211.978A11.993 11.993 0 00224 32.253v-8.147c0-7.523-6.845-13.193-14.237-11.798C94.472 34.048 7.364 135.575 8.004 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.789 504 256c0-121.187-86.924-222.067-201.824-243.704C294.807 10.908 288 16.604 288 24.103z" />
  </svg>
);

SvgCircleNotch.displayName = "SvgCircleNotch";
SvgCircleNotch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCircleNotch;
