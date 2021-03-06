import * as React from "react";

const SvgBraille = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M64 400a32 32 0 1032 32 32 32 0 00-32-32zm160-160a32 32 0 1032 32 32 32 0 00-32-32zm0 160a32 32 0 1032 32 32 32 0 00-32-32zm224-160a32 32 0 1032 32 32 32 0 00-32-32zm0 160a32 32 0 1032 32 32 32 0 00-32-32zm160-160a32 32 0 1032 32 32 32 0 00-32-32zm0 160a32 32 0 1032 32 32 32 0 00-32-32zm0-256a32 32 0 10-32-32 32 32 0 0032 32z"
      opacity={0.4}
    />
    <path
      d="M64 208a64 64 0 1064 64 64 64 0 00-64-64zm0-160a64 64 0 1064 64 64 64 0 00-64-64zm160 0a64 64 0 1064 64 64 64 0 00-64-64zm224 0a64 64 0 1064 64 64 64 0 00-64-64z"
      className="braille_svg__fa-primary"
    />
  </svg>
);

SvgBraille.displayName = "SvgBraille";
SvgBraille.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBraille;
