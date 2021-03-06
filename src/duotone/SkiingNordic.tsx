import * as React from "react";

const SvgSkiingNordic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M336 96a48 48 0 10-48-48 48 48 0 0048 48zm216 320a24 24 0 00-24 24 24.07 24.07 0 01-24 24h-69.5L460 285.67a31.85 31.85 0 01-12 2.33h-20.7l-25.2 176H99.5l52.21-260.94a32 32 0 01-30.88-9L66.9 464H24a24 24 0 000 48h480a72.08 72.08 0 0072-72 24.07 24.07 0 00-24-24z"
      opacity={0.4}
    />
    <path
      d="M186.2 332.2L123.7 464h70.9l43.1-91-22-13a95.84 95.84 0 01-29.5-27.8zM448 224h-43.9L378 170.8c-12.5-25.5-35.5-44.2-61.8-50.9L245 98.7a95.74 95.74 0 00-80.8 17.1l-39.7 30.4a32.17 32.17 0 1042.21 48.35l36.49-28c7.7-5.9 17.4-8 25.3-6.1l14.7 4.4-37.5 87.4A64.18 64.18 0 00232 332.6l85 50.2-25.5 81.2h67l23.6-75.5a48.25 48.25 0 00-21.6-54.4L299.3 298l31.3-78.3 20.3 41.4A48.35 48.35 0 00394 288h54a32 32 0 0032-32 32 32 0 00-32-32z"
      className="skiing-nordic_svg__fa-primary"
    />
  </svg>
);

SvgSkiingNordic.displayName = "SvgSkiingNordic";
SvgSkiingNordic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkiingNordic;
