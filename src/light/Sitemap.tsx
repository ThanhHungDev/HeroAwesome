import * as React from "react";

const SvgSitemap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 352h-32v-97.59c0-16.77-13.62-30.41-30.41-30.41H336v-64h48c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H256c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h48v64H94.41C77.62 224 64 237.64 64 254.41V352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32H96v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-32v-96h208v96h-32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zm-480 32v96H32v-96h96zm240 0v96h-96v-96h96zM256 128V32h128v96H256zm352 352h-96v-96h96v96z" />
  </svg>
);

SvgSitemap.displayName = "SvgSitemap";
SvgSitemap.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSitemap;
