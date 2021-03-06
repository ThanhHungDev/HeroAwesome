import * as React from "react";

const SvgGamepad = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M480.07 96H160a160 160 0 10114.24 272h91.52A160 160 0 10480.07 96zM480 384a127 127 0 01-91.37-38.4l-9.43-9.6H260.8l-9.41 9.6A127 127 0 01160 384c-70.57 0-128-57.42-128-128s57.43-128 128-128h320c70.61 0 128 57.42 128 128s-57.43 128-128 128zM222.18 236.36h-42.54v-42.54a9.86 9.86 0 00-9.82-9.82h-19.64a9.86 9.86 0 00-9.82 9.82v42.54H97.82a9.86 9.86 0 00-9.82 9.82v19.64a9.86 9.86 0 009.82 9.82h42.54v42.54a9.86 9.86 0 009.82 9.82h19.64a9.86 9.86 0 009.82-9.82v-42.54h42.54a9.86 9.86 0 009.82-9.82v-19.64a9.86 9.86 0 00-9.82-9.82zM448 256a32 32 0 1032 32 32 32 0 00-32-32zm64-64a32 32 0 1032 32 32 32 0 00-32-32z" />
  </svg>
);

SvgGamepad.displayName = "SvgGamepad";
SvgGamepad.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGamepad;
