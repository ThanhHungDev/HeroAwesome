import * as React from "react";

const SvgRampLoading = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M292.4 328.8c-2.7-5.4-8.2-8.8-14.3-8.8H105.9c-6.1 0-11.6 3.4-14.3 8.8l-80 160C6.3 499.5 14 512 25.9 512h332.2c11.9 0 19.6-12.5 14.3-23.2l-80-160zM352 0H32C14.3 0 0 14.3 0 32v320c0 16.5 12.6 29.5 28.6 31.3L63 314.5c.3-.6.7-1 1-1.5V64h256v249c.3.5.8 1 1 1.5l34.4 68.8c16-1.8 28.6-14.9 28.6-31.3V32c0-17.7-14.3-32-32-32z" />
  </svg>
);

SvgRampLoading.displayName = "SvgRampLoading";
SvgRampLoading.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRampLoading;
