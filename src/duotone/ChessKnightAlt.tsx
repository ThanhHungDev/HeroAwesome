import * as React from "react";

const SvgChessKnightAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path
      d="M320 473.89V496a16 16 0 01-16 16H16a16 16 0 01-16-16v-22.11a16 16 0 018.85-14.31L32 448v-16a16 16 0 0116-16h224a16 16 0 0116 16v16l23.16 11.58a16 16 0 018.84 14.31z"
      opacity={0.4}
    />
    <path
      d="M45.55 235.52l28.83 12.86a22.59 22.59 0 0017.67.34l9.09-3.65a22.79 22.79 0 0013.33-14.62l6.53-21.87a17.09 17.09 0 018.92-11.15l14.2-5.43v37.21a28.58 28.58 0 01-16.9 26.09L80.68 279C40.87 299.22 32.42 352.42 64 384h192c7-7.85 16-18.31 16-32V203.16C272 126.62 209.38 64 132.84 64H40.52A8.54 8.54 0 0032 72.56 12.14 12.14 0 0033.27 78l10.1 20.28-6.37 6.35a17.21 17.21 0 00-5 12.11v97.9a22.86 22.86 0 0013.55 20.88zM80.07 128a16 16 0 11-15.94 16 16 16 0 0115.94-16z"
      className="chess-knight-alt_svg__fa-primary"
    />
  </svg>
);

SvgChessKnightAlt.displayName = "SvgChessKnightAlt";
SvgChessKnightAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessKnightAlt;
