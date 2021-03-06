import * as React from "react";

const SvgCommentEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5a8 8 0 00-1.5 8.7A7.83 7.83 0 008 480c66.3 0 116-31.8 140.6-51.4A305 305 0 00256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm-40.6 310.6l-48.2 5.4a10.17 10.17 0 01-11.2-11.2l5.4-48.2 96.3-96.3 54 54zm150.7-150.7l-31.8 31.8-54-54 31.8-31.8a20.22 20.22 0 0128.6 0l25.4 25.4a20.22 20.22 0 010 28.6z"
      opacity={0.4}
    />
    <path
      d="M366.1 163.3l-25.4-25.4a20.22 20.22 0 00-28.6 0l-31.8 31.8 54 54 31.8-31.8a20.22 20.22 0 000-28.6zM161.4 288.6l-5.4 48.2a10.17 10.17 0 0011.2 11.2l48.2-5.4 96.3-96.3-54-54z"
      className="comment-edit_svg__fa-primary"
    />
  </svg>
);

SvgCommentEdit.displayName = "SvgCommentEdit";
SvgCommentEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentEdit;
