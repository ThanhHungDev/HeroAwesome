import * as React from "react";

const SvgCommentCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 00-1.5 8.7A7.83 7.83 0 008 480c66.3 0 116-31.8 140.6-51.4A305 305 0 00256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm114.1 163.8l-131 130a11 11 0 01-15.6-.1l-75.7-76.3a11 11 0 01.1-15.6l26-25.8a11 11 0 0115.6.1l42.1 42.5 97.2-96.4a11 11 0 0115.6.1l25.8 26a11 11 0 01-.1 15.5z"
      opacity={0.4}
    />
    <path
      d="M370.1 195.8l-131 130a11 11 0 01-15.6-.1l-75.7-76.3a11 11 0 01.1-15.6l26-25.8a11 11 0 0115.6.1l42.1 42.5 97.2-96.4a11 11 0 0115.6.1l25.8 26a11 11 0 01-.1 15.5z"
      className="comment-check_svg__fa-primary"
    />
  </svg>
);

SvgCommentCheck.displayName = "SvgCommentCheck";
SvgCommentCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentCheck;
