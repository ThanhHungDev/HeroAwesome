import * as React from "react";

const SvgCommentPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 00-1.5 8.7A7.83 7.83 0 008 480c66.3 0 116-31.8 140.6-51.4A305 305 0 00256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm112 216a16 16 0 01-16 16h-72v72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-72h-72a16 16 0 01-16-16v-16a16 16 0 0116-16h72v-72a16 16 0 0116-16h16a16 16 0 0116 16v72h72a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M368 248a16 16 0 01-16 16h-72v72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-72h-72a16 16 0 01-16-16v-16a16 16 0 0116-16h72v-72a16 16 0 0116-16h16a16 16 0 0116 16v72h72a16 16 0 0116 16z"
      className="comment-plus_svg__fa-primary"
    />
  </svg>
);

SvgCommentPlus.displayName = "SvgCommentPlus";
SvgCommentPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentPlus;
