import * as React from "react";

const SvgPaperPlane = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M245.53 410.5l-75 92.83c-14 17.1-42.5 7.8-42.5-15.8V358l280.26-252.77c5.5-4.9 13.3 2.6 8.6 8.3L191.72 387.87z"
      opacity={0.4}
    />
    <path
      d="M511.59 28l-72 432a24.07 24.07 0 01-33 18.2l-214.87-90.33 225.17-274.34c4.7-5.7-3.1-13.2-8.6-8.3L128 358 14.69 313.83a24 24 0 01-2.2-43.2L476 3.23c17.29-10 39 4.6 35.59 24.77z"
      className="paper-plane_svg__fa-primary"
    />
  </svg>
);

SvgPaperPlane.displayName = "SvgPaperPlane";
SvgPaperPlane.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPaperPlane;
