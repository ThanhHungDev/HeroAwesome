import * as React from "react";

const SvgPodiumStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 144H111.4c6.3-30.9 30.7-55.3 62.7-62 8.7 8.7 20.7 14 33.9 14h64c26.5 0 48-21.5 48-48S298.5 0 272 0h-64c-22.1 0-40.4 15-46.1 35.2-52.1 11.6-91.8 55-98.6 108.8H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-32 320h-38.2L384 224H64l22.2 240H48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-95.5-137.3l-33 32.2 7.8 45.5c1.4 8.2-7.2 14.3-14.5 10.5L224 393.4l-40.8 21.5c-7.2 3.8-15.9-2.3-14.5-10.5l7.8-45.5-33-32.2c-5.9-5.8-2.7-15.9 5.5-17.1l45.6-6.7 20.4-41.4c3.7-7.5 14.3-7.4 17.9 0l20.4 41.4 45.6 6.7c8.2 1.2 11.5 11.3 5.6 17.1z" />
  </svg>
);

SvgPodiumStar.displayName = "SvgPodiumStar";
SvgPodiumStar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPodiumStar;
