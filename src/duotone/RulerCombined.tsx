import * as React from "react";

const SvgRulerCombined = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 384v96a32 32 0 01-32 32H32c-2.76 0-5.24-.91-7.8-1.57L182.63 352H224v56a8 8 0 008 8h16a8 8 0 008-8v-56h64v56a8 8 0 008 8h16a8 8 0 008-8v-56h64v56a8 8 0 008 8h16a8 8 0 008-8v-56h32a32 32 0 0132 32zm-352-96h-56a8 8 0 01-8-8v-16a8 8 0 018-8h56v-64h-56a8 8 0 01-8-8v-16a8 8 0 018-8h56V96h-56a8 8 0 01-8-8V72a8 8 0 018-8h56V32a32 32 0 00-32-32H32A32 32 0 000 32v448c0 2.77.91 5.24 1.57 7.8L160 329.38z"
      opacity={0.4}
    />
    <path
      d="M96 264v16a8 8 0 008 8h56v-32h-56a8 8 0 00-8 8zm0-192v16a8 8 0 008 8h56V64h-56a8 8 0 00-8 8zm0 96v16a8 8 0 008 8h56v-32h-56a8 8 0 00-8 8zm320 184v56a8 8 0 008 8h16a8 8 0 008-8v-56zm-192 56a8 8 0 008 8h16a8 8 0 008-8v-56h-32zm96 0a8 8 0 008 8h16a8 8 0 008-8v-56h-32z"
      className="ruler-combined_svg__fa-primary"
    />
  </svg>
);

SvgRulerCombined.displayName = "SvgRulerCombined";
SvgRulerCombined.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRulerCombined;
