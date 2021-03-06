import * as React from "react";

const SvgMailBulk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 256H32a32 32 0 00-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288a32 32 0 00-32-32zM160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480a32 32 0 0032 32h256a32 32 0 0032-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm288-224v64h64v-64z"
      opacity={0.4}
    />
    <path
      d="M544 160H224a32 32 0 00-32 32v32h96a64.09 64.09 0 0163.71 57.82l.29-.22V416h192a32 32 0 0032-32V192a32 32 0 00-32-32zm-32 128h-64v-64h64zm-64-160V32a32 32 0 00-32-32H96a32 32 0 00-32 32v192h96v-32a64.07 64.07 0 0164-64z"
      className="mail-bulk_svg__fa-primary"
    />
  </svg>
);

SvgMailBulk.displayName = "SvgMailBulk";
SvgMailBulk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMailBulk;
