import * as React from "react";

const SvgCaretCircleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M296 157.1v197.8c0 10.7-13 16.1-20.5 8.5l-98.3-98.9c-4.7-4.7-4.7-12.2 0-16.9l98.3-98.9c7.5-7.7 20.5-2.3 20.5 8.4zM256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm0-48c110.5 0 200-89.5 200-200S366.5 56 256 56 56 145.5 56 256s89.5 200 200 200z" />
  </svg>
);

SvgCaretCircleLeft.displayName = "SvgCaretCircleLeft";
SvgCaretCircleLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleLeft;
