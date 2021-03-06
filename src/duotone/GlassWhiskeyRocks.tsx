import * as React from "react";

const SvgGlassWhiskeyRocks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M119.6 415.59l.06.4h273.06v-.31l.07-.43L427.66 192H84.49l35 223.15zM327.43 233.7l46.87 46.89a33.19 33.19 0 010 46.89l-46.87 46.89a33.14 33.14 0 01-46.86 0l-46.87-46.89a33.19 33.19 0 010-46.89l46.87-46.89a33.15 33.15 0 0146.86 0zM128 256a32 32 0 0132-32h64a31.86 31.86 0 0116.47 4.55L211.07 258a65.24 65.24 0 000 92.13L213 352h-53a32 32 0 01-32-32z"
      opacity={0.4}
    />
    <path
      d="M442.63 96l-49.77 319.22-.07.43v.31H119.73l-.06-.4-.07-.44L69.42 96h373.21M480 32H32A32 32 0 00.32 68.51l56 356.58A64 64 0 00119.71 480h273a64.07 64.07 0 0063.4-54.91l55.57-356.58A32 32 0 00480 32z"
      className="glass-whiskey-rocks_svg__fa-primary"
    />
  </svg>
);

SvgGlassWhiskeyRocks.displayName = "SvgGlassWhiskeyRocks";
SvgGlassWhiskeyRocks.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlassWhiskeyRocks;
