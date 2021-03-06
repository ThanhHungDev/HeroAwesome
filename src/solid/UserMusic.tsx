import * as React from "react";

const SvgUserMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M224 257A128 128 0 1096 129a128 128 0 00128 128zm64 176c0-54.9 48.34-99.39 114.45-109.72C378.72 302.2 347.82 289 313.59 289h-16.68a174.12 174.12 0 01-145.82 0h-16.68A134.43 134.43 0 000 423.41V465a48 48 0 0048 48h282.42C304.13 492.81 288 464.66 288 433zM598.94 98.33l-96.53 28.51a32 32 0 00-22.41 30.5V361a148.76 148.76 0 00-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V245.15l73-21.39a32 32 0 0023-30.71V129a32 32 0 00-41.06-30.67z" />
  </svg>
);

SvgUserMusic.displayName = "SvgUserMusic";
SvgUserMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserMusic;
