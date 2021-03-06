import * as React from "react";

const SvgTachometerAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0039.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 00576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67L305.65 154c-5.13 3.49-11 6-17.64 6a32 32 0 010-64zM96 384a32 32 0 1132-32 32 32 0 01-32 32zm48-160a32 32 0 1132-32 32 32 0 01-32 32zm246.77-72.41l-61.33 184A62.8 62.8 0 01343.12 416H232.88a63.34 63.34 0 0151-95.59l61.34-184a24 24 0 0145.53 15.19zm14.66 57.2L421 162.24a31.54 31.54 0 0111-2.24 32 32 0 010 64c-11.38 0-20.89-6.27-26.57-15.21zM480 384a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M283.9 320.41l61.34-184a24 24 0 0145.53 15.19l-61.33 184a62.8 62.8 0 0113.68 80.4H232.88a63.34 63.34 0 0151-95.59z"
      className="tachometer-alt_svg__fa-primary"
    />
  </svg>
);

SvgTachometerAlt.displayName = "SvgTachometerAlt";
SvgTachometerAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometerAlt;
