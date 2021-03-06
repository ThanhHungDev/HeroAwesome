import * as React from "react";

const SvgMapMarkedAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M554.06 161.16L416 224v288l139.88-55.95A32 32 0 00576 426.34V176a16 16 0 00-21.94-14.84zM20.12 216A32 32 0 000 245.66V496a16 16 0 0021.94 14.86L160 448V214.92a302.84 302.84 0 01-21.25-46.42zM288 359.67a47.78 47.78 0 01-36.51-17C231.83 319.51 210.92 293.09 192 266v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72A47.8 47.8 0 01288 359.67z"
      opacity={0.4}
    />
    <path
      d="M288 0a126 126 0 00-126 126c0 56.26 82.35 158.8 113.9 196a15.77 15.77 0 0024.2 0C331.65 284.8 414 182.26 414 126A126 126 0 00288 0zm0 168a42 42 0 1142-42 42 42 0 01-42 42z"
      className="map-marked-alt_svg__fa-primary"
    />
  </svg>
);

SvgMapMarkedAlt.displayName = "SvgMapMarkedAlt";
SvgMapMarkedAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkedAlt;
