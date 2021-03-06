import * as React from "react";

const SvgBadgeCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 256a88 88 0 00-57.1-82.4A88 88 0 00338.4 57.1a88 88 0 00-164.8 0A88 88 0 0057.1 173.6a88 88 0 000 164.8 88 88 0 00116.5 116.5 88 88 0 00164.8 0 88 88 0 00116.5-116.5A88 88 0 00512 256zm-144.8-44.25l-131 130a11 11 0 01-15.55-.06l-75.72-76.33a11 11 0 01.06-15.56L171 224a11 11 0 0115.56.06l42.15 42.49 97.2-96.42a11 11 0 0115.55.06l25.82 26a11 11 0 01-.08 15.56z"
      opacity={0.4}
    />
    <path
      d="M367.2 211.75l-131 130a11 11 0 01-15.55-.06l-75.72-76.33a11 11 0 01.06-15.56L171 224a11 11 0 0115.56.06l42.15 42.49 97.2-96.42a11 11 0 0115.55.06l25.82 26a11 11 0 01-.06 15.56z"
      className="badge-check_svg__fa-primary"
    />
  </svg>
);

SvgBadgeCheck.displayName = "SvgBadgeCheck";
SvgBadgeCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBadgeCheck;
