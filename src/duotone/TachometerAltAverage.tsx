import * as React from "react";

const SvgTachometerAltAverage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 32C128.94 32 0 160.94 0 320a286.44 286.44 0 0039.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.44 286.44 0 00576 320c0-159.06-128.94-288-288-288zM96 384a32 32 0 1132-32 32 32 0 01-32 32zm48-160a32 32 0 1132-32 32 32 0 01-32 32zm203.54 183a63 63 0 01-4.42 9H232.88A63.36 63.36 0 01255 329.17a62.44 62.44 0 019-4.42V128a24 24 0 0148 0v196.75A63.36 63.36 0 01347.54 407zM400 192a32 32 0 1132 32 32 32 0 01-32-32zm80 192a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M343.12 416H232.88A63.36 63.36 0 01255 329.17a62.44 62.44 0 019-4.42V128a24 24 0 0148 0v196.75A63.35 63.35 0 01343.12 416z"
      className="tachometer-alt-average_svg__fa-primary"
    />
  </svg>
);

SvgTachometerAltAverage.displayName = "SvgTachometerAltAverage";
SvgTachometerAltAverage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerAltAverage;
