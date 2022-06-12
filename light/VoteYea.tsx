import * as React from "react";

const SvgVoteYea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M409.3 138.6c-1.6-1.6-3.6-2.3-5.7-2.3-2 0-4.1.8-5.7 2.3L290.5 246.1 242 197.5c-1.6-1.6-3.6-2.3-5.7-2.3-2 0-4.1.8-5.7 2.3l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l65.5 65.5c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l124.5-124.5c3.1-3.1 3.1-8.2 0-11.3l-11.4-11.2zM608 288h-64V62.5c0-16.8-14.3-30.5-32-30.5H128c-17.7 0-32 13.7-32 30.5V288H32c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32zM128 64h384v304H128V64zm480 384H32V320h64v48H73.6c-5.3 0-9.6 3.6-9.6 8v16c0 4.4 4.3 8 9.6 8h492.8c5.3 0 9.6-3.6 9.6-8v-16c0-4.4-4.3-8-9.6-8H544v-48h64v128z" />
  </svg>
);

SvgVoteYea.displayName = "SvgVoteYea";
SvgVoteYea.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVoteYea;
