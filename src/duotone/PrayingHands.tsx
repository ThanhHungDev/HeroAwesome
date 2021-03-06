import * as React from "react";

const SvgPrayingHands = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M640 384v96c0 10.82-8.52 32-32 32a32.16 32.16 0 01-8.06-1l-179.19-46.65A117.32 117.32 0 01336 352V224a32 32 0 0164 0v80a16 16 0 0032 0v-76.54a95.86 95.86 0 00-13.69-49.39L340.56 48.48a31.8 31.8 0 0153.27-34.7c.2.24.61.21.79.48l117.26 175.89A95.66 95.66 0 01528 243.38v80.23l90.12 30A32 32 0 01640 384z"
      opacity={0.4}
    />
    <path
      d="M32 511.92c-23.48 0-32-21.18-32-32v-96a32 32 0 0121.88-30.35l90.12-30V243.3a95.66 95.66 0 0116.12-53.23l117.26-175.9c.17-.27.59-.25.79-.48a31.8 31.8 0 0153.27 34.7L221.69 178A95.86 95.86 0 00208 227.37v76.55a16 16 0 1032 0v-80a32 32 0 1164 0v128a117.35 117.35 0 01-84.75 112.35L40.06 510.89a32 32 0 01-8.06 1.03z"
      className="praying-hands_svg__fa-primary"
    />
  </svg>
);

SvgPrayingHands.displayName = "SvgPrayingHands";
SvgPrayingHands.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPrayingHands;
