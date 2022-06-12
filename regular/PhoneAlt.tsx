import * as React from "react";

const SvgPhoneAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M484.25 330l-101.59-43.55a45.86 45.86 0 00-53.39 13.1l-32.7 40a311.08 311.08 0 01-124.19-124.12l40-32.7a45.91 45.91 0 0013.1-53.42L182 27.79a45.63 45.63 0 00-52.31-26.61L35.5 22.89A45.59 45.59 0 000 67.5C0 313.76 199.68 512.1 444.56 512a45.58 45.58 0 0044.59-35.51l21.7-94.22a45.75 45.75 0 00-26.6-52.27zm-41.59 134.09C225.08 463.09 49 287 48 69.3l90.69-20.9 42.09 98.22-68.09 55.71c46.39 99 98.19 150.63 197 197l55.69-68.11 98.19 42.11z" />
  </svg>
);

SvgPhoneAlt.displayName = "SvgPhoneAlt";
SvgPhoneAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneAlt;
