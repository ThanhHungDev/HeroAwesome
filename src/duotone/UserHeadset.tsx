import * as React from "react";

const SvgUserHeadset = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M416 192v16a112.15 112.15 0 01-112 112h-96a32 32 0 010-64h32a32 32 0 0132 32h32a80.09 80.09 0 0080-80v-16c0-88.22-71.78-160-160-160S64 103.78 64 192v16a16 16 0 01-32 0v-16C32 86.13 118.13 0 224 0s192 86.13 192 192z"
      opacity={0.4}
    />
    <path
      d="M320 352h-23.1a174.1 174.1 0 01-145.8 0H128A128 128 0 000 480a32 32 0 0032 32h384a32 32 0 0032-32 128 128 0 00-128-128zm-175.65-60.53c-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0164-64h32a64 64 0 0155.41 32H304a48.05 48.05 0 0048-48v-16a128 128 0 00-256 0c0 40.42 19.1 76 48.35 99.47z"
      className="user-headset_svg__fa-primary"
    />
  </svg>
);

SvgUserHeadset.displayName = "SvgUserHeadset";
SvgUserHeadset.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserHeadset;
