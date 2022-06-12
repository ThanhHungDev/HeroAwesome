import * as React from "react";

const SvgHospitals = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M256 96V32a32 32 0 00-32-32H64a32 32 0 00-32 32v64a32 32 0 00-32 32v352a32 32 0 0032 32h224a32 32 0 0032-32V128a32 32 0 00-32-32zM128 404a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-128a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm26-116h-20a6 6 0 01-6-6v-26h-26a6 6 0 01-6-6v-20a6 6 0 016-6h26V70a6 6 0 016-6h20a6 6 0 016 6v26h26a6 6 0 016 6v20a6 6 0 01-6 6h-26v26a6 6 0 01-6 6zm70 244a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-128a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zM608 96V32a32 32 0 00-32-32H416a32 32 0 00-32 32v64a32 32 0 00-32 32v352a32 32 0 0032 32h224a32 32 0 0032-32V128a32 32 0 00-32-32zM480 404a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-128a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm26-116h-20a6 6 0 01-6-6v-26h-26a6 6 0 01-6-6v-20a6 6 0 016-6h26V70a6 6 0 016-6h20a6 6 0 016 6v26h26a6 6 0 016 6v20a6 6 0 01-6 6h-26v26a6 6 0 01-6 6zm70 244a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-128a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12z" />
  </svg>
);

SvgHospitals.displayName = "SvgHospitals";
SvgHospitals.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHospitals;