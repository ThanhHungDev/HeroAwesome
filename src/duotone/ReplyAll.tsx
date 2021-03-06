import * as React from "react";

const SvgReplyAll = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M115.39 250.38L224 344.17V360c0 20.7-24.3 31.45-39.69 18.16l-176-152a24 24 0 010-36.32l176-152C199.72 24.55 224 35.35 224 56v15.83l-108.61 93.79a56 56 0 000 84.76z"
      opacity={0.4}
    />
    <path
      d="M576 321.33c0 61.44-39.58 122.3-83.33 154.13-13.66 9.93-33.11-2.54-28.08-18.63 38.51-123.17-3.92-169.49-112.59-182V359c0 20.7-24.3 31.45-39.69 18.16l-176-152a24 24 0 010-36.32l176-152C327.72 23.55 352 34.35 352 55v82.77C481.18 148 576 190 576 321.33z"
      className="reply-all_svg__fa-primary"
    />
  </svg>
);

SvgReplyAll.displayName = "SvgReplyAll";
SvgReplyAll.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgReplyAll;
