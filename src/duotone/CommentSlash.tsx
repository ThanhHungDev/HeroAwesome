import * as React from "react";

const SvgCommentSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M150.21 84.35C195.39 51.79 254.84 32 320 32c141.4 0 256 93.1 256 208 0 49.23-21 94.46-56.23 130.08zM64 240c0 49.6 21.4 95 57 130.7-12.6 50.3-54.3 95.2-54.8 95.8A8 8 0 0072 480c66.3 0 116-31.8 140.6-51.4A305 305 0 00320 448a312.39 312.39 0 0078.4-10L72.87 186.37A171.62 171.62 0 0064 240z"
      opacity={0.4}
    />
    <path
      d="M636.67 480.52l-19.6 25.31a16.06 16.06 0 01-22.5 2.8L6.17 53.79a15.94 15.94 0 01-2.8-22.41L23 6.17a16.06 16.06 0 0122.5-2.8l588.3 454.84a15.86 15.86 0 012.87 22.31z"
      className="comment-slash_svg__fa-primary"
    />
  </svg>
);

SvgCommentSlash.displayName = "SvgCommentSlash";
SvgCommentSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentSlash;
