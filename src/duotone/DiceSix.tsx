import * as React from "react";

const SvgDiceSix = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M384 32H64A64 64 0 000 96v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zM128 384a32 32 0 1132-32 32 32 0 01-32 32zm0-96a32 32 0 1132-32 32 32 0 01-32 32zm0-96a32 32 0 1132-32 32 32 0 01-32 32zm192 192a32 32 0 1132-32 32 32 0 01-32 32zm0-96a32 32 0 1132-32 32 32 0 01-32 32zm0-96a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M320 192a32 32 0 10-32-32 32 32 0 0032 32zm0 32a32 32 0 1032 32 32 32 0 00-32-32zm0 96a32 32 0 1032 32 32 32 0 00-32-32zM128 128a32 32 0 1032 32 32 32 0 00-32-32zm0 96a32 32 0 1032 32 32 32 0 00-32-32zm0 96a32 32 0 1032 32 32 32 0 00-32-32z"
      className="dice-six_svg__fa-primary"
    />
  </svg>
);

SvgDiceSix.displayName = "SvgDiceSix";
SvgDiceSix.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiceSix;
