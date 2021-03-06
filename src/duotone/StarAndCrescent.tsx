import * as React from "react";

const SvgStarAndCrescent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M509 230.85l-55.27 53.87 13.05 76.07a9.93 9.93 0 01-14.45 10.49L384 335.37l-68.33 35.91a9.86 9.86 0 01-4.64 1.17 10 10 0 01-9.81-11.66l13-76.07L259 230.85a10 10 0 015.52-17l76.38-11.1 34.16-69.21a10 10 0 0117.86 0l34.16 69.21 76.38 11.1a10 10 0 015.54 17z"
      opacity={0.4}
    />
    <path
      d="M0 256C0 114.84 114.84 0 256 0a254.82 254.82 0 0189.75 16.48 15.06 15.06 0 01-5.28 29.16c-1.48 0-6.86-.46-9.18-.46C215 45.18 120.47 139.75 120.47 256S215 466.82 331.29 466.82c2.29 0 7.73-.46 9.18-.46a15 15 0 014.85 29.32A254.9 254.9 0 01256 512C114.84 512 0 397.16 0 256z"
      className="star-and-crescent_svg__fa-primary"
    />
  </svg>
);

SvgStarAndCrescent.displayName = "SvgStarAndCrescent";
SvgStarAndCrescent.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarAndCrescent;
