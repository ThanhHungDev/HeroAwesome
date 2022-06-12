import * as React from "react";

const SvgBusinessTime = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M496 224a144 144 0 10144 144 143.92 143.92 0 00-144-144zm64 150.29a9.74 9.74 0 01-9.71 9.71h-60.57a9.74 9.74 0 01-9.71-9.71v-76.57a9.74 9.74 0 019.71-9.71h12.57a9.74 9.74 0 019.71 9.71V352h38.29a9.74 9.74 0 019.71 9.71z"
      opacity={0.4}
    />
    <path
      d="M326.82 320H208a16 16 0 01-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43a173.64 173.64 0 01-12.61-128zM512 192.81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12A174.92 174.92 0 01496 192c5.4 0 10.72.33 16 .81zM320 96H192V64h128zm230.29 256H512v-54.28a9.74 9.74 0 00-9.71-9.71h-12.57a9.74 9.74 0 00-9.71 9.71v76.57a9.74 9.74 0 009.71 9.71h60.57a9.74 9.74 0 009.71-9.71v-12.58a9.74 9.74 0 00-9.71-9.71z"
      className="business-time_svg__fa-primary"
    />
  </svg>
);

SvgBusinessTime.displayName = "SvgBusinessTime";
SvgBusinessTime.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBusinessTime;
