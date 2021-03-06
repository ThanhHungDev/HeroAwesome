import * as React from "react";

const SvgExternalLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M497.6 0L334.4.17a14.4 14.4 0 00-14.4 14.4v33.31a14.4 14.4 0 0014.69 14.4l73.63-2.72 2.06 2.06-278.86 278.87a12 12 0 000 17l23 23a12 12 0 0017 0l278.86-278.87 2.06 2.06-2.72 73.63a14.4 14.4 0 0014.4 14.69h33.31a14.4 14.4 0 0014.4-14.4L512 14.4A14.4 14.4 0 00497.6 0zM432 288h-16a16 16 0 00-16 16v154a6 6 0 01-6 6H54a6 6 0 01-6-6V118a6 6 0 016-6h154a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V304a16 16 0 00-16-16z" />
  </svg>
);

SvgExternalLink.displayName = "SvgExternalLink";
SvgExternalLink.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExternalLink;
