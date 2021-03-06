import * as React from "react";

const SvgBusAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M96 160v96a32 32 0 0032 32h112V128H128a32 32 0 00-32 32zm320 96v-96a32 32 0 00-32-32H272v160h112a32 32 0 0032-32zM64 480a32 32 0 0032 32h32a32 32 0 0032-32v-32H64zm288-32v32a32 32 0 0032 32h32a32 32 0 0032-32v-32z"
      opacity={0.4}
    />
    <path
      d="M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8a24 24 0 00-24 24v80a24 24 0 0024 24h8v160a32 32 0 0032 32h384a32 32 0 0032-32V256h8a24 24 0 0024-24v-80a24 24 0 00-24-24zM112 400a32 32 0 1132-32 32 32 0 01-32 32zm128-112H128a32 32 0 01-32-32v-96a32 32 0 0132-32h112zM168 96a8 8 0 01-8-8V72a8 8 0 018-8h176a8 8 0 018 8v16a8 8 0 01-8 8H168zm104 32h112a32 32 0 0132 32v96a32 32 0 01-32 32H272zm128 272a32 32 0 1132-32 32 32 0 01-32 32z"
      className="bus-alt_svg__fa-primary"
    />
  </svg>
);

SvgBusAlt.displayName = "SvgBusAlt";
SvgBusAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBusAlt;
