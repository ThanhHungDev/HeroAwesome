import * as React from "react";

const SvgMapMarkerCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M192 0C86.4 0 0 86.4 0 192c0 76.8 25.6 99.2 172.8 310.4a24 24 0 0038.4 0C358.4 291.2 384 268.8 384 192 384 86.4 297.6 0 192 0zm114.08 163.83l-131 130a11 11 0 01-15.55-.06l-75.76-76.34a11 11 0 01.06-15.56l26-25.82a11 11 0 0115.56.06l42.15 42.49 97.2-96.42a11 11 0 0115.55.06l25.82 26a11 11 0 01-.03 15.59z"
      opacity={0.4}
    />
    <path
      d="M306.08 163.83l-131 130a11 11 0 01-15.55-.06l-75.76-76.34a11 11 0 01.06-15.56l26-25.82a11 11 0 0115.56.06l42.15 42.49 97.2-96.42a11 11 0 0115.55.06l25.82 26a11 11 0 01-.03 15.59z"
      className="map-marker-check_svg__fa-primary"
    />
  </svg>
);

SvgMapMarkerCheck.displayName = "SvgMapMarkerCheck";
SvgMapMarkerCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMapMarkerCheck;
