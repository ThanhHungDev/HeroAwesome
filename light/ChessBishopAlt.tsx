import * as React from "react";

const SvgChessBishopAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M247.16 435.58L224 424v-16a24 24 0 00-24-24h1.41a519 519 0 01-9.31-96H216a8 8 0 008-8v-16a8 8 0 00-8-8h-9.21c19.63-21.36 17.06-51.75 17.06-52.61 0-49.4-36.44-117.48-70.59-139.39h-1.1a16 16 0 000-32h-48a16 16 0 000 32h-1.07c-34.3 22-70.74 90.34-70.74 139.48 0 .7-2.55 31.09 17.1 52.52H40a8 8 0 00-8 8v16a8 8 0 008 8h23.9a519 519 0 01-9.31 96H56a24 24 0 00-24 24v16L8.85 435.58A16 16 0 000 449.89V496a16 16 0 0016 16h224a16 16 0 0016-16v-46.11a16 16 0 00-8.84-14.31zm-119-346.69c6.59 0 21.69 11.08 37.59 37.14l-44.68 46.34a6.46 6.46 0 000 8.82l14.09 14.61a5.92 5.92 0 008.5 0l37.5-38.89c6.69 16.92 10.69 33.61 10.69 46.57 0 34.42-19.1 36.82-31.69 40.55v12h-64V244c-12.41-3.63-31.69-6-31.69-40.55 0-45.69 43.69-114.56 63.69-114.56zM168.84 384H87.16a552.7 552.7 0 008.75-96h64.18a552.7 552.7 0 008.75 96zM224 480H32v-20.22l32-16V416h128v27.78l32 16z" />
  </svg>
);

SvgChessBishopAlt.displayName = "SvgChessBishopAlt";
SvgChessBishopAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessBishopAlt;
