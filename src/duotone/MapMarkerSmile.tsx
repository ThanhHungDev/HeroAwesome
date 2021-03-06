import * as React from "react";

const SvgMapMarkerSmile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4a24 24 0 0038.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm64 117.16A26.84 26.84 0 11229.16 144 26.84 26.84 0 01256 117.16zm-128 0A26.84 26.84 0 11101.16 144 26.84 26.84 0 01128 117.16zm164.17 141a132.31 132.31 0 01-200.33 0 16 16 0 0124.32-20.78 100.31 100.31 0 00151.67 0 16 16 0 1124.34 20.79z"
      opacity={0.4}
    />
    <path
      d="M256 170.84A26.84 26.84 0 10229.16 144 26.84 26.84 0 00256 170.84zm-128 0A26.84 26.84 0 10101.16 144 26.84 26.84 0 00128 170.84zm162.39 64.72a16 16 0 00-22.56 1.78 100.31 100.31 0 01-151.67 0 16 16 0 00-24.32 20.78 132.31 132.31 0 00200.33 0 16 16 0 00-1.78-22.56z"
      className="map-marker-smile_svg__fa-primary"
    />
  </svg>
);

SvgMapMarkerSmile.displayName = "SvgMapMarkerSmile";
SvgMapMarkerSmile.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkerSmile;
