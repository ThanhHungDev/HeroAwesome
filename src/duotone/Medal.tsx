import * as React from "react";

const SvgMedal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M127.18 0H16A16 16 0 002.92 25.18l111.27 159a207 207 0 01109.56-53.39L154.62 15.54A32 32 0 00127.18 0zM496 0H384.82a32 32 0 00-27.44 15.54l-69.13 115.21a207 207 0 01109.56 53.38L509.08 25.18A16 16 0 00496 0z"
      opacity={0.4}
    />
    <path
      d="M256 160a176 176 0 10176 176 176 176 0 00-176-176zm92.52 157.26l-37.93 37 9 52.22a11.48 11.48 0 01-16.65 12.09L256 393.88l-46.9 24.65a11.48 11.48 0 01-16.65-12.09l9-52.22-37.93-37a11.49 11.49 0 016.35-19.59l52.4-7.63 23.43-47.52a11.5 11.5 0 0120.61 0L289.74 290l52.43 7.64a11.49 11.49 0 016.35 19.62z"
      className="medal_svg__fa-primary"
    />
  </svg>
);

SvgMedal.displayName = "SvgMedal";
SvgMedal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMedal;
