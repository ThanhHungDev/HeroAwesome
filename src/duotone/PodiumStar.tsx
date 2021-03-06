import * as React from "react";

const SvgPodiumStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M384 224l-22.22 240H86.22L64 224z" opacity={0.4} />
    <path
      d="M400 464H48a16 16 0 00-16 16v16a16 16 0 0016 16h352a16 16 0 0016-16v-16a16 16 0 00-16-16zm-92.63-143a10.05 10.05 0 00-8.47-11.43l-45.6-6.7-20.4-41.4a10 10 0 00-17.9 0l-20.4 41.4-45.6 6.73a10 10 0 00-5.5 17.1l33 32.2-7.8 45.5a10 10 0 0014.5 10.5l40.8-21.5 40.8 21.5a10 10 0 0014.5-10.5l-7.8-45.5 33-32.2a10 10 0 002.87-5.7zM432 144H113.68c6.2-30.29 29.85-54.3 61-61.55A47.72 47.72 0 00208 96h64a48 48 0 000-96h-64a47.89 47.89 0 00-46.31 36C110.81 48.48 71.66 91.15 65 144H16a16 16 0 00-16 16v16a16 16 0 0016 16h416a16 16 0 0016-16v-16a16 16 0 00-16-16z"
      className="podium-star_svg__fa-primary"
    />
  </svg>
);

SvgPodiumStar.displayName = "SvgPodiumStar";
SvgPodiumStar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPodiumStar;
