import * as React from "react";

const SvgSignalAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M576 48v416h-32V48h32M416 176v288h-32V176h32M256 304v160h-32V304h32M96 400v64H64v-64h32M592 0h-64c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM432 128h-64c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM272 256h-64c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zm-160 96H48c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" />
  </svg>
);

SvgSignalAlt.displayName = "SvgSignalAlt";
SvgSignalAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignalAlt;
