import * as React from "react";

const SvgListMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M16 256h256a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm0-128h256a16 16 0 0016-16V80a16 16 0 00-16-16H16A16 16 0 000 80v32a16 16 0 0016 16zm128 192H16a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zM470.94 1.33l-96.53 28.51A32 32 0 00352 60.34V360a148.76 148.76 0 00-48-8c-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V148.15l73-21.39a32 32 0 0023-30.71V32a32 32 0 00-41.06-30.67z" />
  </svg>
);

SvgListMusic.displayName = "SvgListMusic";
SvgListMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgListMusic;
