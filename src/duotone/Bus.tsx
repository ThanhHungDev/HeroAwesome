import * as React from "react";

const SvgBus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M352 448v32a32 32 0 0032 32h32a32 32 0 0032-32v-32zM64 480a32 32 0 0032 32h32a32 32 0 0032-32v-32H64zm64-192h256a32 32 0 0032-32V128a32 32 0 00-32-32H128a32 32 0 00-32 32v128a32 32 0 0032 32z"
      opacity={0.4}
    />
    <path
      d="M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8a24 24 0 00-24 24v80a24 24 0 0024 24h8v160a32 32 0 0032 32h384a32 32 0 0032-32V256h8a24 24 0 0024-24v-80a24 24 0 00-24-24zm-392 0a32 32 0 0132-32h256a32 32 0 0132 32v128a32 32 0 01-32 32H128a32 32 0 01-32-32zm16 272a32 32 0 1132-32 32 32 0 01-32 32zm288 0a32 32 0 1132-32 32 32 0 01-32 32z"
      className="bus_svg__fa-primary"
    />
  </svg>
);

SvgBus.displayName = "SvgBus";
SvgBus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBus;
