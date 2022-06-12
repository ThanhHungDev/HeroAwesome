import * as React from "react";

const SvgBullseyeArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 320a64.07 64.07 0 01-64-64c0-28.95 19.45-53.19 45.88-61.07L285 139.79l-2.12-6.38c-11.15-3.17-22.7-5.41-34.88-5.41a128 128 0 10128 128c0-12.18-2.24-23.73-5.42-34.89l-6.37-2.11-55.14 55.14A63.85 63.85 0 01248 320zm236.43-138.9l-35.5 35.5a52.13 52.13 0 01-19.17 12.07c15.9 101.19-53.24 196.1-154.43 212s-196.1-53.25-212-154.43 53.25-196.1 154.43-212a185.71 185.71 0 0157.88.05 52 52 0 0111.76-19.22l35.5-35.5A247.87 247.87 0 00248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248a247.87 247.87 0 00-11.57-74.9z"
      opacity={0.4}
    />
    <path
      d="M310 77.7L373.68 14a20.56 20.56 0 0134 8l18.55 55.65 55.66 18.55a20.56 20.56 0 018 34L426.3 194a20.58 20.58 0 01-21 5l-49.7-16.57L265 273a24 24 0 01-34-34l90.59-90.59L305 98.71a20.58 20.58 0 015-21.01z"
      className="bullseye-arrow_svg__fa-primary"
    />
  </svg>
);

SvgBullseyeArrow.displayName = "SvgBullseyeArrow";
SvgBullseyeArrow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBullseyeArrow;
