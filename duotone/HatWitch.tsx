import * as React from "react";

const SvgHatWitch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M571.21 426.81l-22.67-22.66c-6-6-15.49-6-22-.43A185.1 185.1 0 01405.88 448H170.1a185.14 185.14 0 01-120.68-44.28c-6.5-5.53-16-5.61-22 .43L4.78 426.81c-6.44 6.44-6.45 17.25.4 23.25A248.62 248.62 0 00170.1 512h235.78a248.64 248.64 0 00164.93-61.94c6.84-6 6.84-16.81.4-23.25zM320 352h-64v64h64z"
      opacity={0.4}
    />
    <path
      d="M542.35 114.76L512 192l-14-42.12A32 32 0 00467.59 128H428.4a32 32 0 00-30.4 21.87l-6.35 19a64.06 64.06 0 001.89 45.45l79.6 185.73A152.57 152.57 0 01405.88 416H352v-64a32 32 0 00-32-32h-64a32 32 0 00-32 32v64h-53.9a152.51 152.51 0 01-67.1-15.81l104-233.86a128.08 128.08 0 0153.46-59.15l166.35-103a32 32 0 0138.5 5.16L534.62 82a32 32 0 017.73 32.76z"
      className="hat-witch_svg__fa-primary"
    />
  </svg>
);

SvgHatWitch.displayName = "SvgHatWitch";
SvgHatWitch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHatWitch;
