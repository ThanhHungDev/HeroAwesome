import * as React from "react";

const SvgCommentAltSmile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M448 0H64A64.06 64.06 0 000 64v288a64.06 64.06 0 0064 64h96v84a12 12 0 0019.1 9.7L304 416h144a64.06 64.06 0 0064-64V64a64.06 64.06 0 00-64-64zM320 133.2a26.8 26.8 0 11-26.8 26.8 26.8 26.8 0 0126.8-26.8zm-128 0a26.8 26.8 0 11-26.8 26.8 26.8 26.8 0 0126.8-26.8zm164.2 140.9a132.32 132.32 0 01-200.4 0 16 16 0 0124.3-20.7 100.23 100.23 0 00151.6-.1 16.07 16.07 0 0124.5 20.8z"
      opacity={0.4}
    />
    <path
      d="M320 186.8a26.8 26.8 0 10-26.8-26.8 26.8 26.8 0 0026.8 26.8zm-128 0a26.8 26.8 0 10-26.8-26.8 26.8 26.8 0 0026.8 26.8zm162.3 64.7a16.11 16.11 0 00-22.6 1.8 100.23 100.23 0 01-151.6.1 16 16 0 00-24.3 20.7 132.32 132.32 0 00200.4 0 16 16 0 00-1.9-22.6z"
      className="comment-alt-smile_svg__fa-primary"
    />
  </svg>
);

SvgCommentAltSmile.displayName = "SvgCommentAltSmile";
SvgCommentAltSmile.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltSmile;
