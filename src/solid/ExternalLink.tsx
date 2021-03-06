import * as React from "react";

const SvgExternalLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M432 320h-32a16 16 0 00-16 16v112H64V128h144a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V336a16 16 0 00-16-16zM474.67 0H316a28 28 0 00-28 28v18.71a28 28 0 0028.79 27.19L384 72 135.06 319.09l-.06.06a24 24 0 000 33.94l23.94 23.85.06.06a24 24 0 0033.91-.09L440 128l-1.88 67.22v.78a28 28 0 0028 28H484a28 28 0 0028-28V37.33A37.33 37.33 0 00474.67 0z" />
  </svg>
);

SvgExternalLink.displayName = "SvgExternalLink";
SvgExternalLink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExternalLink;
