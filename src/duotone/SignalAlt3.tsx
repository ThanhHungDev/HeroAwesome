import * as React from "react";

const SvgSignalAlt3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M608 32v448a32 32 0 01-32 32h-32a32 32 0 01-32-32V32a32 32 0 0132-32h32a32 32 0 0132 32z"
      opacity={0.4}
    />
    <path
      d="M96 384H64a32 32 0 00-32 32v64a32 32 0 0032 32h32a32 32 0 0032-32v-64a32 32 0 00-32-32zm160-128h-32a32 32 0 00-32 32v192a32 32 0 0032 32h32a32 32 0 0032-32V288a32 32 0 00-32-32zm160-128h-32a32 32 0 00-32 32v320a32 32 0 0032 32h32a32 32 0 0032-32V160a32 32 0 00-32-32z"
      className="signal-alt-3_svg__fa-primary"
    />
  </svg>
);

SvgSignalAlt3.displayName = "SvgSignalAlt3";
SvgSignalAlt3.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignalAlt3;
