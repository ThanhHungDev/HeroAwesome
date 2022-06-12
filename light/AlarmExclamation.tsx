import * as React from "react";

const SvgAlarmExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 352a24 24 0 1024 24 24 24 0 00-24-24zm-8.5-24h17a8.14 8.14 0 008-7.5l7-136a8 8 0 00-8-8.5h-31a8 8 0 00-8 8.5l7 136a8 8 0 008 7.5zM32 112a80.09 80.09 0 0180-80 79.23 79.23 0 0150 18 253.22 253.22 0 0134.44-10.8C175.89 15.42 145.86 0 112 0A112.14 112.14 0 000 112c0 25.86 9.17 49.41 24 68.39a255.93 255.93 0 0117.4-31.64A78.94 78.94 0 0132 112zM400 0c-33.86 0-63.89 15.42-84.44 39.25A253.22 253.22 0 01350 50.05a79.23 79.23 0 0150-18 80.09 80.09 0 0180 80 78.94 78.94 0 01-9.36 36.75A255.93 255.93 0 01488 180.39c14.79-19 24-42.53 24-68.39A112.14 112.14 0 00400 0zM256 64C132.29 64 32 164.29 32 288a222.89 222.89 0 0054.84 146.54L34.34 487a8 8 0 000 11.32l11.31 11.31a8 8 0 0011.32 0l52.49-52.5a223.21 223.21 0 00293.08 0L455 509.66a8 8 0 0011.32 0l11.31-11.31a8 8 0 000-11.32l-52.5-52.49A222.89 222.89 0 00480 288c0-123.71-100.29-224-224-224zm0 416c-105.87 0-192-86.13-192-192S150.13 96 256 96s192 86.13 192 192-86.13 192-192 192z" />
  </svg>
);

SvgAlarmExclamation.displayName = "SvgAlarmExclamation";
SvgAlarmExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlarmExclamation;
