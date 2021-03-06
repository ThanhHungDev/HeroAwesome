import * as React from "react";

const SvgLessThan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M311.15 373.06L77.04 256l234.11-117.06c7.9-3.95 11.11-13.56 7.16-21.46L304 88.85c-3.95-7.9-13.56-11.11-21.47-7.16L8.84 218.53A16 16 0 000 232.85v46.31c0 6.06 3.42 11.6 8.84 14.31l273.68 136.84c7.9 3.95 17.52.75 21.47-7.16l14.31-28.63c3.96-7.9.75-17.51-7.15-21.46z" />
  </svg>
);

SvgLessThan.displayName = "SvgLessThan";
SvgLessThan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLessThan;
