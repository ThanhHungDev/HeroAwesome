import * as React from "react";

const SvgSyncAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M8 454.06V320a24 24 0 0124-24h134.06c21.38 0 32.09 25.85 17 41l-41.75 41.75A166.82 166.82 0 00256.16 424c77.41-.07 144.31-53.14 162.78-126.85a12 12 0 0111.65-9.15h57.31a12 12 0 0111.81 14.18C478.07 417.08 377.19 504 256 504a247.14 247.14 0 01-171.31-68.69L49 471c-15.15 15.15-41 4.44-41-16.94z"
      opacity={0.4}
    />
    <path
      d="M12.3 209.82C33.93 94.92 134.81 8 256 8a247.14 247.14 0 01171.31 68.69L463 41c15.12-15.12 41-4.41 41 17v134a24 24 0 01-24 24H345.94c-21.38 0-32.09-25.85-17-41l41.75-41.75A166.8 166.8 0 00255.85 88c-77.46.07-144.33 53.18-162.79 126.85A12 12 0 0181.41 224H24.1a12 12 0 01-11.8-14.18z"
      className="sync-alt_svg__fa-primary"
    />
  </svg>
);

SvgSyncAlt.displayName = "SvgSyncAlt";
SvgSyncAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSyncAlt;
