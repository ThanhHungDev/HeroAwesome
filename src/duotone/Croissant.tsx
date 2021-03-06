import * as React from "react";

const SvgCroissant = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M13.15 265.48a62.71 62.71 0 01-8.55-3.57 215.11 215.11 0 0039.6 173.5 32 32 0 0021.38 12.33 32.43 32.43 0 004.06.26 32 32 0 0019.76-6.83l122.32-96c5.1-4 8.11-9.58 10.05-15.6-.21-.06-.42 0-.62-.09zM447.71 65.63a32 32 0 00-12.33-21.43A214.91 214.91 0 00261.17 4.48c1.41 2.93 3.3 5.52 4.28 8.7l64 208c.06.2 0 .41.09.62 6-1.93 11.62-5 15.61-10l96-122.32a32.06 32.06 0 006.56-23.85z"
      opacity={0.4}
    />
    <path
      d="M509.89 180.66A215.77 215.77 0 00465.7 110l-77.79 99.1 86.8 14.47a32 32 0 0035.18-42.91zm-275-158.07A32 32 0 00196.52 1 268.34 268.34 0 001 196.55a32 32 0 0021.56 38.35l208 64a32 32 0 0032-8l28.32-28.31a32 32 0 008-32zm-25.8 365.35L110 465.73a215.37 215.37 0 0070.67 44.19 32 32 0 0042.91-35.18z"
      className="croissant_svg__fa-primary"
    />
  </svg>
);

SvgCroissant.displayName = "SvgCroissant";
SvgCroissant.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCroissant;
