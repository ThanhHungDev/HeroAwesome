import * as React from "react";

const SvgHouseSignal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M0 224v48c132.55 0 240 107.45 240 240h48c0-159.06-128.94-288-288-288zm0 192v48a48 48 0 0148 48h48a96 96 0 00-96-96zm0-96v48a144 144 0 01144 144h48c0-106-86-192-192-192zm634.63-120L576 146.84V48a16 16 0 00-16-16h-16a16 16 0 00-16 16v55.34L424.06 9.1a36.36 36.36 0 00-48.15 0L165.37 200a16 16 0 00-1.37 22.57l10.62 12a16 16 0 0022.59 1.33L224 211.59v50.91a339.26 339.26 0 0148 53.35v-147.8L400 51.93l128 116.12V368H303.41a332.68 332.68 0 0118.07 48H536a40 40 0 0040-40V211.59l26.75 24.27a16 16 0 0022.59-1.33l10.62-12a16 16 0 00-1.33-22.53zM432 288a16.05 16.05 0 0016-16v-64a16 16 0 00-16-16h-64a16 16 0 00-16 16v64a16.05 16.05 0 0016 16z" />
  </svg>
);

SvgHouseSignal.displayName = "SvgHouseSignal";
SvgHouseSignal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouseSignal;