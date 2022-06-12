import * as React from "react";

const SvgHouse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M570.69 236.27L512 184.44V48a16 16 0 00-16-16h-64a16 16 0 00-16 16v51.67L314.76 10.3C308.48 4.61 296.51 0 288 0s-20.45 4.61-26.73 10.3l-256 226a16 16 0 00-1.2 22.6l21.4 23.8a18.31 18.31 0 0011.95 5.3 18.51 18.51 0 0010.69-4.11l15.9-14V480a32 32 0 0032 32H480a32 32 0 0032-32V269.87l15.91 14a18.62 18.62 0 0010.72 4.13 18.12 18.12 0 0011.87-5.31l21.41-23.81a18.61 18.61 0 004.09-10.7 18.21 18.21 0 00-5.31-11.91zM352 298.66A21.39 21.39 0 01330.64 320h-85.3A21.39 21.39 0 01224 298.66v-85.34A21.39 21.39 0 01245.34 192h85.3A21.39 21.39 0 01352 213.32z" />
  </svg>
);

SvgHouse.displayName = "SvgHouse";
SvgHouse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouse;