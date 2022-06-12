import * as React from "react";

const SvgSmilePlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M208 96C93.1 96 0 189.1 0 304s93.1 208 208 208 208-93.1 208-208S322.9 96 208 96zm64 133.2a26.8 26.8 0 11-26.8 26.8 26.8 26.8 0 0126.8-26.8zm-128 0a26.8 26.8 0 11-26.8 26.8 26.8 26.8 0 0126.8-26.8zm164.2 140.9a132.32 132.32 0 01-200.4 0 16 16 0 1124.3-20.7 100.23 100.23 0 00151.6-.1 16.07 16.07 0 0124.5 20.8z"
      opacity={0.4}
    />
    <path
      d="M624 80h-64V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v64h-64a16 16 0 00-16 16v32a16 16 0 0016 16h64v64a16 16 0 0016 16h32a16 16 0 0016-16v-64h64a16 16 0 0016-16V96a16 16 0 00-16-16zM272 229.2a26.8 26.8 0 1026.8 26.8 26.8 26.8 0 00-26.8-26.8zm-128 0a26.8 26.8 0 1026.8 26.8 26.8 26.8 0 00-26.8-26.8z"
      className="smile-plus_svg__fa-primary"
    />
  </svg>
);

SvgSmilePlus.displayName = "SvgSmilePlus";
SvgSmilePlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSmilePlus;