import * as React from "react";

const SvgDiscDrive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 416h-16V96a64 64 0 00-64-64H96a64 64 0 00-64 64v320H16a16 16 0 00-16 16v32a16 16 0 0016 16h480a16 16 0 0016-16v-32a16 16 0 00-16-16zm-240 0a160 160 0 11160-160 160 160 0 01-160 160zm0-192a32 32 0 1032 32 32 32 0 00-32-32z" />
  </svg>
);

SvgDiscDrive.displayName = "SvgDiscDrive";
SvgDiscDrive.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiscDrive;
