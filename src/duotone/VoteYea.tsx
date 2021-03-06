import * as React from "react";

const SvgVoteYea = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M512 64.3A32.29 32.29 0 00479.7 32H160.4A32.37 32.37 0 00128 64.3V384h384zm-83.2 100.5L300.5 292a10.65 10.65 0 01-15.2-.1l-74.1-74.7a10.65 10.65 0 010-15.2l25.5-25.3a10.65 10.65 0 0115.2.1l41.3 41.6 95.2-94.4a10.65 10.65 0 0115.2.1l25.3 25.5a10.65 10.65 0 01-.1 15.2z"
      opacity={0.4}
    />
    <path
      d="M285.3 291.9a10.65 10.65 0 0015.2.1l128.3-127.2a10.65 10.65 0 00.1-15.2l-25.3-25.5a10.65 10.65 0 00-15.2-.1l-95.2 94.4-41.3-41.6a10.65 10.65 0 00-15.2-.1L211.2 202a10.65 10.65 0 000 15.2zM608 320h-64v64h22.4c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8H96v-64H32a32 32 0 00-32 32v96a32 32 0 0032 32h576a32 32 0 0032-32v-96a32 32 0 00-32-32z"
      className="vote-yea_svg__fa-primary"
    />
  </svg>
);

SvgVoteYea.displayName = "SvgVoteYea";
SvgVoteYea.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVoteYea;
