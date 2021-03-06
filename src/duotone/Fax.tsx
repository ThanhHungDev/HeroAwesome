import * as React from "react";

const SvgFax = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M480 96v96H128V32a32 32 0 0132-32h224v80a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M64 128H32a32 32 0 00-32 32v320a32 32 0 0032 32h32a32 32 0 0032-32V160a32 32 0 00-32-32zm416 64H128v288a32 32 0 0032 32h320a32 32 0 0032-32V224a32 32 0 00-32-32zM288 432a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm0-128a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm128 128a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zm0-128a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32a16 16 0 0116-16h32a16 16 0 0116 16zM400 96h80v-4.58a17.92 17.92 0 00-5.25-12.67l-73.43-73.5A18 18 0 00388.57 0H384v80a16 16 0 0016 16z"
      className="fax_svg__fa-primary"
    />
  </svg>
);

SvgFax.displayName = "SvgFax";
SvgFax.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFax;
