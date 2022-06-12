import * as React from "react";

const SvgMapMarkerCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4 4.8 6.4 12 9.6 19.2 9.6s14.4-3.2 19.2-9.6C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm0 446.09c-14.41-20.56-27.51-39.12-39.41-55.99C58.35 256.48 48 240.2 48 192c0-79.4 64.6-144 144-144s144 64.6 144 144c0 48.2-10.35 64.48-104.59 198.09-11.9 16.87-25 35.44-39.41 56zm99.93-292.32l-23.21-23.4c-3.85-3.88-10.11-3.9-13.98-.06l-87.36 86.66-37.88-38.19c-3.84-3.88-10.11-3.9-13.98-.06l-23.4 23.21c-3.88 3.85-3.9 10.11-.06 13.98l68.05 68.6c3.85 3.88 10.11 3.9 13.98.06l117.78-116.83c3.88-3.84 3.91-10.1.06-13.97z" />
  </svg>
);

SvgMapMarkerCheck.displayName = "SvgMapMarkerCheck";
SvgMapMarkerCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkerCheck;
