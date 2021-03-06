import * as React from "react";

const SvgTachometer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0039.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 00576 320c0-159.06-128.94-288-288-288zm102.77 119.59l-61.33 184A62.8 62.8 0 01343.12 416H232.88a63.34 63.34 0 0151-95.59l61.34-184a24 24 0 0145.53 15.19z"
      opacity={0.4}
    />
    <path
      d="M283.9 320.41l61.34-184a24 24 0 0145.53 15.19l-61.33 184a62.8 62.8 0 0113.68 80.4H232.88a63.34 63.34 0 0151-95.59z"
      className="tachometer_svg__fa-primary"
    />
  </svg>
);

SvgTachometer.displayName = "SvgTachometer";
SvgTachometer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTachometer;
