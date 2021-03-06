import * as React from "react";

const SvgHelmetBattle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M32 256c17.67 0 32-12.56 32-28.06V0L1 221.13C-4.08 238.84 11.2 256 32 256zm543-34.87L512 0v227.94c0 15.5 14.32 28.06 32 28.06 20.8 0 36.08-17.16 31-34.87z"
      opacity={0.4}
    />
    <path
      d="M494.82 426.77L320 512V256l96-32v-32H160v32l96 32v256L81.19 426.77C68.46 420.9 61.44 406 64.87 391.53 73.14 356.72 96 293.58 96 210.82 96 90.35 288 0 288 0s192 90.35 192 210.82c0 82.76 22.86 145.9 31.14 180.71 3.43 14.47-3.59 29.37-16.32 35.24z"
      className="helmet-battle_svg__fa-primary"
    />
  </svg>
);

SvgHelmetBattle.displayName = "SvgHelmetBattle";
SvgHelmetBattle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHelmetBattle;
