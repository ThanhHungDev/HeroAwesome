import * as React from "react";

const SvgBoxTissue = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M383.88 287.82l64-192H338.47a70.2 70.2 0 01-66.59-48 70.21 70.21 0 00-66.6-48H63.88l64 288zm-384 192a32 32 0 0032 32h448a32 32 0 0032-32v-64h-512zm480-256h-40.94l-21.33 64h14.27a16 16 0 010 32h-352a16 16 0 110-32h15.21l-14.22-64h-49a32 32 0 00-32 32v128h512v-128a32 32 0 00-31.99-32z" />
  </svg>
);

SvgBoxTissue.displayName = "SvgBoxTissue";
SvgBoxTissue.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxTissue;
