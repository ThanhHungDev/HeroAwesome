import * as React from "react";

const SvgMoonStars = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
      opacity={0.4}
    />
    <path
      d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 01-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 00-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
      className="moon-stars_svg__fa-primary"
    />
  </svg>
);

SvgMoonStars.displayName = "SvgMoonStars";
SvgMoonStars.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoonStars;
