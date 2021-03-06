import * as React from "react";

const SvgMapMarked = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 359.67a47.78 47.78 0 01-36.51-17C231.83 319.51 210.92 293.09 192 266v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72A47.8 47.8 0 01288 359.67zM20.12 216A32 32 0 000 245.66V496a16 16 0 0021.94 14.86L160 448V214.92a302.84 302.84 0 01-21.25-46.42zm533.94-54.79L416 224v288l139.88-55.95A32 32 0 00576 426.34V176a16 16 0 00-21.94-14.84z"
      opacity={0.4}
    />
    <path
      d="M414 126c0 56.26-82.35 158.8-113.9 196a15.77 15.77 0 01-24.2 0C244.35 284.8 162 182.26 162 126a126 126 0 01252 0z"
      className="map-marked_svg__fa-primary"
    />
  </svg>
);

SvgMapMarked.displayName = "SvgMapMarked";
SvgMapMarked.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarked;
