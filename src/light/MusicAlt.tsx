import * as React from "react";

const SvgMusicAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M342 1.64L213.41 33.52C200.72 37.74 192 50 192 64v312.13C171.66 361.28 143.38 352 112 352 50.14 352 0 387.82 0 432s50.14 80 112 80 112-35.82 112-80V192l138.12-35.37A32 32 0 00384 126.27V32a32 32 0 00-42-30.36zM112 480c-47.14 0-80-25.3-80-48s32.86-48 80-48 80 25.3 80 48-32.86 48-80 48zm240-353.72l-128 32V64h-.56v-.13L352 32z" />
  </svg>
);

SvgMusicAlt.displayName = "SvgMusicAlt";
SvgMusicAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMusicAlt;
