import * as React from "react";

const SvgCommentExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 00-1.5 8.7A7.83 7.83 0 008 480c66.3 0 116-31.8 140.6-51.4A305 305 0 00256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 336a32 32 0 1132-32 32 32 0 01-32 32zm38.2-238.4l-12.8 128a16 16 0 01-15.9 14.4h-19a16 16 0 01-15.9-14.4l-12.8-128a16.06 16.06 0 0115.9-17.6h44.6a16 16 0 0115.9 17.6z"
      opacity={0.4}
    />
    <path
      d="M256 304a32 32 0 1032 32 32 32 0 00-32-32zm22.3-192h-44.6a16.06 16.06 0 00-15.9 17.6l12.8 128a16 16 0 0015.9 14.4h19a16 16 0 0015.9-14.4l12.8-128a16 16 0 00-15.9-17.6z"
      className="comment-exclamation_svg__fa-primary"
    />
  </svg>
);

SvgCommentExclamation.displayName = "SvgCommentExclamation";
SvgCommentExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentExclamation;
