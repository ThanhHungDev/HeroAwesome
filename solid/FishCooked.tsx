import * as React from "react";

const SvgFishCooked = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M363.44 64c-100 0-187.26 65.72-235.85 122l-97-79.26C17.08 95.68-3 107.42.4 124.29L27.27 256 .39 387.73C-3 404.6 17.07 416.32 30.54 405.32l97-79.26C176.17 382.28 263.48 448 363.44 448 516.18 448 640 294.4 640 256S516.18 64 363.44 64zM245.66 261.65l-11.31-11.31a8 8 0 010-11.31L319 154.34a8 8 0 0111.32 0l11.31 11.31a8 8 0 010 11.32L257 261.65a8 8 0 01-11.34 0zm59.31 80a8 8 0 01-11.31 0l-11.31-11.31a8 8 0 010-11.31L431 170.34a8 8 0 0111.32 0l11.31 11.31a8 8 0 010 11.32zM501.66 273L417 357.65a8 8 0 01-11.31 0l-11.31-11.31a8 8 0 010-11.31L479 250.34a8 8 0 0111.32 0l11.31 11.31a8 8 0 01.03 11.35z" />
  </svg>
);

SvgFishCooked.displayName = "SvgFishCooked";
SvgFishCooked.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFishCooked;
