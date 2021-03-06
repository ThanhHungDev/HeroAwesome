import * as React from "react";

const SvgGift = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M224 320v160H64a32 32 0 01-32-32V320zm0-160H32a32 32 0 00-32 32v80a16 16 0 0016 16h208zm256 0H288v128h208a16 16 0 0016-16v-80a32 32 0 00-32-32zM288 480h160a32 32 0 0032-32V320H288z"
      opacity={0.4}
    />
    <path
      d="M224 480h64V320h-64zM359.54 32c-41.82 0-68.86 21.3-103.54 68.3-34.68-47-61.72-68.3-103.54-68.3C103.71 32 64 71.5 64 120a85.65 85.65 0 0010.15 40h78.21a40 40 0 110-80c20 0 34.78 3.3 86.55 80H224v128h64V160h-15c51.67-76.5 66-80 86.55-80a40 40 0 110 80h78.31A86.86 86.86 0 00448 120c0-48.5-39.71-88-88.46-88z"
      className="gift_svg__fa-primary"
    />
  </svg>
);

SvgGift.displayName = "SvgGift";
SvgGift.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGift;
