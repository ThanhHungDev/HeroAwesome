import * as React from "react";

const SvgWalkieTalkie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M352 96h-32V80a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h-32V80a16 16 0 00-16-16h-32a16 16 0 00-16 16v16H32a32.09 32.09 0 00-32 32v178.74a32 32 0 009.38 22.63L32 352v112a48 48 0 0048 48h224a48 48 0 0048-48V352l22.63-22.63a32 32 0 009.37-22.63V128a32.09 32.09 0 00-32-32zm-64 216a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8h176a8 8 0 018 8zm0-64a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8h176a8 8 0 018 8zm0-64a8 8 0 01-8 8H104a8 8 0 01-8-8v-16a8 8 0 018-8h176a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M112 16A16 16 0 0096 0H80a16 16 0 00-16 16v80h48zm168 272H104a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8zm0-64H104a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8zm0-64H104a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8z"
      className="walkie-talkie_svg__fa-primary"
    />
  </svg>
);

SvgWalkieTalkie.displayName = "SvgWalkieTalkie";
SvgWalkieTalkie.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWalkieTalkie;
