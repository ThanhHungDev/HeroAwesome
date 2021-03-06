import * as React from "react";

const SvgShuttlecock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M181.05 481a106.07 106.07 0 01-150-150l2.6-2.6 150 150z"
      opacity={0.4}
    />
    <path
      d="M512 220v54.6a28.15 28.15 0 01-16.2 25.4L245.45 416.5l-39.2 39.2-150-150 39.2-39.2L212 16.2A28.09 28.09 0 01237.35 0H292a28.08 28.08 0 0128 28v20c-12.3 0-56.6-1.3-71.1 44.7l-28.8 91.2-45.4 26.4-36.3 78 25.7 25.7 70.8-70.8 44.5-140.8A32 32 0 01309.85 80H404a28 28 0 0128 28v94.1a32.08 32.08 0 01-22.4 30.5l-140.8 44.5-70.8 70.8 25.7 25.8 78-36.3 26.4-45.4 91.2-28.8c49-15.5 44.7-65.2 44.7-71.2h20a28.08 28.08 0 0128 28z"
      className="shuttlecock_svg__fa-primary"
    />
  </svg>
);

SvgShuttlecock.displayName = "SvgShuttlecock";
SvgShuttlecock.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShuttlecock;
