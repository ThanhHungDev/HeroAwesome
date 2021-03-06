import * as React from "react";

const SvgBadgePercent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 256a88 88 0 00-57.1-82.4A88 88 0 00338.4 57.1a88 88 0 00-164.8 0A88 88 0 0057.1 173.6a88 88 0 000 164.8 88 88 0 00116.5 116.5 88 88 0 00164.8 0 88 88 0 00116.5-116.5A88 88 0 00512 256zm-320-96a32 32 0 11-32 32 32 32 0 0132-32zm12.28 181.65a16 16 0 01-22.63 0l-11.31-11.31a16 16 0 010-22.63l137.37-137.37a16 16 0 0122.63 0l11.31 11.31a16 16 0 010 22.63zM320 352a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M192 160a32 32 0 11-32 32 32 32 0 0132-32zm12.28 181.65a16 16 0 01-22.63 0l-11.31-11.31a16 16 0 010-22.63l137.37-137.37a16 16 0 0122.63 0l11.31 11.31a16 16 0 010 22.63zM320 352a32 32 0 1132-32 32 32 0 01-32 32z"
      className="badge-percent_svg__fa-primary"
    />
  </svg>
);

SvgBadgePercent.displayName = "SvgBadgePercent";
SvgBadgePercent.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBadgePercent;
