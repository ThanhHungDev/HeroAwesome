import * as React from "react";

const SvgDiscDrive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 112a144 144 0 10144 144 144 144 0 00-144-144zm0 176a32 32 0 1132-32 32 32 0 01-32 32zm240 144h-16V96a64 64 0 00-64-64H96a64 64 0 00-64 64v336H16a16 16 0 00-16 16v16a16 16 0 0016 16h480a16 16 0 0016-16v-16a16 16 0 00-16-16zm-64 0H80V96a16 16 0 0116-16h320a16 16 0 0116 16z" />
  </svg>
);

SvgDiscDrive.displayName = "SvgDiscDrive";
SvgDiscDrive.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiscDrive;
