import * as React from "react";

const SvgBoneBreak = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M598.88 171.44A74.38 74.38 0 01640 238v7.64a74.38 74.38 0 01-144.94 23.53l-7.75-23.26A32 32 0 00457 224H352l32-64-32-64h105a32 32 0 0030.36-21.88l7.75-23.26A74.38 74.38 0 01640 74.39V82a74.39 74.39 0 01-41.12 66.53 12.79 12.79 0 000 22.91z"
      opacity={0.4}
    />
    <path
      d="M320 282.51L256 256l-26.5-64-63 63a32 32 0 01-36.94 6l-21.93-11a74.39 74.39 0 00-85.84 119.13l5.4 5.4a74.39 74.39 0 0076.12 18 12.79 12.79 0 0116.18 16.18 74.39 74.39 0 0018 76.12l5.4 5.4A74.39 74.39 0 00262 404.33l-11-21.93a32 32 0 016-36.94z"
      className="bone-break_svg__fa-primary"
    />
  </svg>
);

SvgBoneBreak.displayName = "SvgBoneBreak";
SvgBoneBreak.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoneBreak;
