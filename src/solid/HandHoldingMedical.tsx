import * as React from "react";

const SvgHandHoldingMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M159.88 175.82h64v64a16 16 0 0016 16h64a16 16 0 0016-16v-64h64a16 16 0 0016-16v-64a16 16 0 00-16-16h-64v-64a16 16 0 00-16-16h-64a16 16 0 00-16 16v64h-64a16 16 0 00-16 16v64a16 16 0 0016 16zm408.19 160.31a39.91 39.91 0 00-55.93-8.47l-119.67 88.18H271.86a16 16 0 010-32h78.24c16 0 30.75-10.87 33.37-26.61a32.06 32.06 0 00-31.62-37.38h-160a117.7 117.7 0 00-74.12 26.25l-46.5 37.74H15.87a16.11 16.11 0 00-16 16v96a16.11 16.11 0 0016 16h347a104.8 104.8 0 0061.7-20.27L559.6 392a40 40 0 008.47-55.87z" />
  </svg>
);

SvgHandHoldingMedical.displayName = "SvgHandHoldingMedical";
SvgHandHoldingMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandHoldingMedical;
