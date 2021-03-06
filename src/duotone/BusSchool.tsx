import * as React from "react";

const SvgBusSchool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M64 480a32 32 0 0032 32h32a32 32 0 0032-32v-32H64zm288-32v32a32 32 0 0032 32h32a32 32 0 0032-32v-32zM112 160v64a32 32 0 0032 32h96V128h-96a32 32 0 00-32 32zm288 64v-64a32 32 0 00-32-32h-96v128h96a32 32 0 0032-32z"
      opacity={0.4}
    />
    <path
      d="M488 112h-24V80c0-44.8-92.11-80-208-80S48 35.2 48 80v32H24a24 24 0 00-24 24v80a24 24 0 0024 24h24v20.9c-9.39 5.57-16 15.38-16 27.1v128a32 32 0 0032 32h384a32 32 0 0032-32V288c0-11.72-6.61-21.52-16-27.1V240h24a24 24 0 0024-24v-80a24 24 0 00-24-24zM160 72a8 8 0 018-8h176a8 8 0 018 8v16a8 8 0 01-8 8H168a8 8 0 01-8-8zm-48 312a32 32 0 1132-32 32 32 0 01-32 32zm128-128h-96a32 32 0 01-32-32v-64a32 32 0 0132-32h96zm32-128h96a32 32 0 0132 32v64a32 32 0 01-32 32h-96zm128 256a32 32 0 1132-32 32 32 0 01-32 32z"
      className="bus-school_svg__fa-primary"
    />
  </svg>
);

SvgBusSchool.displayName = "SvgBusSchool";
SvgBusSchool.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBusSchool;
