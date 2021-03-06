import * as React from "react";

const SvgAppleAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M295.92 88q-14 13-37 19a116.69 116.69 0 01-35 5l-15-1a128.32 128.32 0 010-32q4-36 23-55 14-13 37-19a116.69 116.69 0 0135-5l15 1 1 15a117.29 117.29 0 01-5 35q-6 23-19 37z"
      opacity={0.4}
    />
    <path
      d="M350.86 129q39 7 63.92 42 22 31 30 78a248.7 248.7 0 01-1 86q-12 71-47.94 119-43 58-107.87 58-16 0-35-10a56.45 56.45 0 00-57.97 0q-19 10-35 10-64.85 0-107.8-58-36-48-47.94-119a248.7 248.7 0 01-1-86q8-47 30-78 25-35 63.92-42 24-4 65.92 7 36 10 60.93 24 25-14 60.93-24 41.93-11 65.9-7z"
      className="apple-alt_svg__fa-primary"
    />
  </svg>
);

SvgAppleAlt.displayName = "SvgAppleAlt";
SvgAppleAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAppleAlt;
