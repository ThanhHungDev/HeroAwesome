import * as React from "react";

const SvgChessBishopAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path
      d="M247.16 459.58L224 448v-16a16 16 0 00-16-16H48a16 16 0 00-16 16v16L8.85 459.58A16 16 0 000 473.89V496a16 16 0 0016 16h224a16 16 0 0016-16v-22.11a16 16 0 00-8.84-14.31z"
      opacity={0.4}
    />
    <path
      d="M64 288h14.89A535.84 535.84 0 0164 384h128a535.84 535.84 0 01-14.89-96H192a16 16 0 0016-16v-16a16 16 0 00-16-16h-11.67c16-6.67 26.48-25.09 26.48-50.43 0-19.32-7.2-42.34-17.73-63.33l-48.59 48.59a4 4 0 01-5.66 0l-5.66-5.66a4 4 0 010-5.65L181 111.7c-10.22-16.81-22.2-31.22-33.86-39.33C155.31 69.59 160 61.85 160 52.73 160 41.28 151.92 32 140.47 32h-24.94C104.08 32 96 41.28 96 52.73c0 9.12 4.69 16.86 12.87 19.64-28.58 19.87-59.68 76.75-59.68 117.2 0 25.34 10.49 43.76 26.48 50.43H64a16 16 0 00-16 16v16a16 16 0 0016 16z"
      className="chess-bishop-alt_svg__fa-primary"
    />
  </svg>
);

SvgChessBishopAlt.displayName = "SvgChessBishopAlt";
SvgChessBishopAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessBishopAlt;
