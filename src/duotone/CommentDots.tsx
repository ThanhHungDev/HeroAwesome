import * as React from "react";

const SvgCommentDots = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 00-1.5 8.7A7.83 7.83 0 008 480c66.3 0 116-31.8 140.6-51.4A305 305 0 00256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272a32 32 0 1132-32 32 32 0 01-32 32zm128 0a32 32 0 1132-32 32 32 0 01-32 32zm128 0a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M128 208a32 32 0 1032 32 32 32 0 00-32-32zm128 0a32 32 0 1032 32 32 32 0 00-32-32zm128 0a32 32 0 1032 32 32 32 0 00-32-32z"
      className="comment-dots_svg__fa-primary"
    />
  </svg>
);

SvgCommentDots.displayName = "SvgCommentDots";
SvgCommentDots.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentDots;
