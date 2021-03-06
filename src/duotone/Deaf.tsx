import * as React from "react";

const SvgDeaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M508.48 31.8L480.2 3.51a12 12 0 00-17 0l-87 87a12 12 0 000 17l28.28 28.29a12 12 0 0017 0l87-87a12 12 0 000-17zM169 314.74a12 12 0 00-17 0L3.51 463.23a12 12 0 000 17l28.29 28.25a12 12 0 0017 0L197.26 360a12 12 0 000-17z"
      opacity={0.4}
    />
    <path
      d="M240 84c-97 0-176 79-176 176a28 28 0 0056 0 120 120 0 01240 0c0 75.16-71 70.31-72 143.62v.38a52.06 52.06 0 01-52 52 28 28 0 000 56 108.13 108.13 0 00108-107.77c.59-34.43 72-48.23 72-144.23 0-97-78.95-176-176-176zm0 152a24 24 0 0124 24 28 28 0 0056 0 80 80 0 00-160 0 28 28 0 0056 0 24 24 0 0124-24z"
      className="deaf_svg__fa-primary"
    />
  </svg>
);

SvgDeaf.displayName = "SvgDeaf";
SvgDeaf.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDeaf;
