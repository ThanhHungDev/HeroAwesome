import * as React from "react";

const SvgMapMarkerTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4a24 24 0 0038.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm84.85 242.91a16 16 0 010 22.63l-11.31 11.31a16 16 0 01-22.63 0L192 225.94l-50.91 50.91a16 16 0 01-22.63 0l-11.31-11.31a16 16 0 010-22.63L158.06 192l-50.91-50.91a16 16 0 010-22.63l11.31-11.31a16 16 0 0122.63 0L192 158.06l50.91-50.91a16 16 0 0122.63 0l11.31 11.31a16 16 0 010 22.63L225.94 192z"
      opacity={0.4}
    />
    <path
      d="M276.85 242.91a16 16 0 010 22.63l-11.31 11.31a16 16 0 01-22.63 0L192 225.94l-50.91 50.91a16 16 0 01-22.63 0l-11.31-11.31a16 16 0 010-22.63L158.06 192l-50.91-50.91a16 16 0 010-22.63l11.31-11.31a16 16 0 0122.63 0L192 158.06l50.91-50.91a16 16 0 0122.63 0l11.31 11.31a16 16 0 010 22.63L225.94 192z"
      className="map-marker-times_svg__fa-primary"
    />
  </svg>
);

SvgMapMarkerTimes.displayName = "SvgMapMarkerTimes";
SvgMapMarkerTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkerTimes;
