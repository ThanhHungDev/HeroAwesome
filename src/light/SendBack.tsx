import * as React from "react";

const SvgSendBack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M175 64H79a16 16 0 00-16 16v96a16 16 0 0016 16h96a16 16 0 0016-16V80a16 16 0 00-16-16zm-16 96H95V96h64zm288-16v80h32v-80a48 48 0 00-48-48H287v32h144a16 16 0 0116 16zm112 176h-96a16 16 0 00-16 16v96a16 16 0 0016 16h96a16 16 0 0016-16v-96a16 16 0 00-16-16zm-16 96h-64v-64h64zm48-160H431a48 48 0 00-48 48v160a48 48 0 0048 48h160a48 48 0 0048-48V304a48 48 0 00-48-48zm16 208a16 16 0 01-16 16H431a16 16 0 01-16-16V304a16 16 0 0116-16h160a16 16 0 0116 16zm-416-96v-80h-32v80a48 48 0 0048 48h144v-32H207a16 16 0 01-16-16zm64-160V48a48 48 0 00-48-48H47A48 48 0 00-1 48v160a48 48 0 0048 48h160a48 48 0 0048-48zm-224 0V48a16 16 0 0116-16h160a16 16 0 0116 16v160a16 16 0 01-16 16H47a16 16 0 01-16-16z" />
  </svg>
);

SvgSendBack.displayName = "SvgSendBack";
SvgSendBack.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSendBack;