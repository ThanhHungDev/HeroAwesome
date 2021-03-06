import * as React from "react";

const SvgTachometerFast = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0039.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 00576 320c0-159.06-128.94-288-288-288zm163.2 174.41L342.65 351.14a62.26 62.26 0 01.47 64.86H232.88a63.33 63.33 0 01-8.88-32 64 64 0 0164-64 63.14 63.14 0 0116.24 2.34L412.8 177.59a24 24 0 1138.4 28.82z"
      opacity={0.4}
    />
    <path
      d="M288 320a63.14 63.14 0 0116.24 2.34L412.8 177.59a24 24 0 1138.4 28.82L342.65 351.14a62.26 62.26 0 01.47 64.86H232.88a63.33 63.33 0 01-8.88-32 64 64 0 0164-64z"
      className="tachometer-fast_svg__fa-primary"
    />
  </svg>
);

SvgTachometerFast.displayName = "SvgTachometerFast";
SvgTachometerFast.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerFast;
