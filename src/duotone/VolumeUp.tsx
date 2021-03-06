import * as React from "react";

const SvgVolumeUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M0 328V184a24 24 0 0124-24h102.06l89-88.95c15-15 41-4.49 41 17V424c0 21.44-25.94 32-41 17l-89-88.95H24A24 24 0 010 328z"
      opacity={0.4}
    />
    <path
      d="M338.23 179.13a24 24 0 10-23.16 42.06 39.42 39.42 0 010 69.62 24 24 0 1023.16 42.06 87.43 87.43 0 000-153.74zM480 256a184.64 184.64 0 00-85.77-156.24 23.9 23.9 0 00-33.12 7.46 24.29 24.29 0 007.41 33.36 136.67 136.67 0 010 230.84 24.28 24.28 0 00-7.41 33.36 23.94 23.94 0 0033.12 7.46A184.62 184.62 0 00480 256zM448.35 20a24.2 24.2 0 10-26.56 40.46 233.65 233.65 0 010 391.16A24.2 24.2 0 10448.35 492a282 282 0 000-472.07z"
      className="volume-up_svg__fa-primary"
    />
  </svg>
);

SvgVolumeUp.displayName = "SvgVolumeUp";
SvgVolumeUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVolumeUp;
