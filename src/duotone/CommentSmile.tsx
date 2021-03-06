import * as React from "react";

const SvgCommentSmile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 00-1.5 8.7A7.83 7.83 0 008 480c66.3 0 116-31.8 140.6-51.4A305 305 0 00256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm64 133.2a26.8 26.8 0 11-26.8 26.8 26.8 26.8 0 0126.8-26.8zm-128 0a26.8 26.8 0 11-26.8 26.8 26.8 26.8 0 0126.8-26.8zm164.2 140.9a132.32 132.32 0 01-200.4 0 16 16 0 1124.3-20.7 100.23 100.23 0 00151.6-.1 16.07 16.07 0 0124.5 20.8z"
      opacity={0.4}
    />
    <path
      d="M320 218.8a26.8 26.8 0 10-26.8-26.8 26.8 26.8 0 0026.8 26.8zm-128 0a26.8 26.8 0 10-26.8-26.8 26.8 26.8 0 0026.8 26.8zm162.3 64.7a16.11 16.11 0 00-22.6 1.8 100.23 100.23 0 01-151.6.1 16 16 0 10-24.3 20.7 132.32 132.32 0 00200.4 0 16 16 0 00-1.9-22.6z"
      className="comment-smile_svg__fa-primary"
    />
  </svg>
);

SvgCommentSmile.displayName = "SvgCommentSmile";
SvgCommentSmile.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentSmile;
