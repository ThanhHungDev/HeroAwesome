import * as React from "react";

const SvgRibbon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M6 444.29l117.2-130 79.2 87.9-91.8 101.9a24.15 24.15 0 01-31.3 3.8L10.54 480A23.91 23.91 0 016 444.29z"
      opacity={0.4}
    />
    <path
      d="M89.34 228.69c-48.6-53.8-13-113.5-11.5-116l43.6-73.2a56.71 56.71 0 0116.8-18c44-29.7 130.7-27.6 171.4 0a56.71 56.71 0 0116.8 18l43.7 73.5a97.84 97.84 0 01-11.4 115.5l-34.2 38-79.1-87.7s52.7-59 56-64.6c-15.4-8.4-40.2-17.9-77.5-17.9s-62.1 9.5-77.5 17.9c3.4 5.5 295.4 330.1 295.4 330.1a23.76 23.76 0 01-4.3 35.6l-68.8 27.9a24 24 0 01-31.3-3.8z"
      className="ribbon_svg__fa-primary"
    />
  </svg>
);

SvgRibbon.displayName = "SvgRibbon";
SvgRibbon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRibbon;
