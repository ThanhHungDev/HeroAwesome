import * as React from "react";

const SvgSkullCrossbones = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M368 128C368 57.31 303.51 0 224 0S80 57.31 80 128c0 46.53 28.21 86.87 70 109.28l-5.48 25.87C141.84 275.77 149.93 288 161 288h126c11 0 19.12-12.22 16.45-24.84L298 237.28c41.76-22.41 70-62.75 70-109.28zm-200 48a32 32 0 1132-32 32 32 0 01-32 32zm112 0a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M280 176a32 32 0 10-32-32 32 32 0 0032 32zm159.15 277.05l-142-69.05 142-69.06a16 16 0 007.15-21.46L432 264.85a16 16 0 00-21.46-7.15L224 348.4 37.47 257.69A16 16 0 0016 264.85L1.69 293.47a16 16 0 007.16 21.46l142 69.06-142 69.06a16 16 0 00-7.15 21.47L16 503.15a16 16 0 0021.47 7.13L224 419.58l186.51 90.72a16 16 0 0021.49-7.15l14.33-28.63a16 16 0 00-7.18-21.47zM168 176a32 32 0 10-32-32 32 32 0 0032 32z"
      className="skull-crossbones_svg__fa-primary"
    />
  </svg>
);

SvgSkullCrossbones.displayName = "SvgSkullCrossbones";
SvgSkullCrossbones.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkullCrossbones;
