import * as React from "react";

const SvgChessQueenAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path
      d="M256 473.89V496a16 16 0 01-16 16H16a16 16 0 01-16-16v-22.11a16 16 0 018.85-14.31L32 448v-16a16 16 0 0116-16h160a16 16 0 0116 16v16l23.16 11.58a16 16 0 018.84 14.31z"
      opacity={0.4}
    />
    <path
      d="M128 48a24 24 0 10-24-24 24 24 0 0024 24zm102.84 39.65l-10.06-6.71c-3.13-2.08-7.12-1-9.38 2a20.05 20.05 0 01-19.89 7.67c-9.74-1.81-16.35-11-16.35-21a5.65 5.65 0 00-5.64-5.61h-16.33a5.45 5.45 0 00-5.41 4.17 20.22 20.22 0 01-39.56 0 5.45 5.45 0 00-5.41-4.17H86.49a5.65 5.65 0 00-5.65 5.64c0 10.82-8 20.53-18.81 21.26a20 20 0 01-17.49-8.06 6.81 6.81 0 00-9.3-1.91l-10.08 6.72a6.73 6.73 0 00-2.29 8.62L67.37 192H64a16 16 0 00-16 16v16a16 16 0 0016 16h16v14a535.76 535.76 0 01-16 130h128a535.76 535.76 0 01-16-130v-14h16a16 16 0 0016-16v-16a16 16 0 00-16-16h-3.37l44.5-95.73a6.73 6.73 0 00-2.29-8.62z"
      className="chess-queen-alt_svg__fa-primary"
    />
  </svg>
);

SvgChessQueenAlt.displayName = "SvgChessQueenAlt";
SvgChessQueenAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessQueenAlt;
