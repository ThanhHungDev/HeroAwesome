import * as React from "react";

const SvgCaretCircleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm-32 120l96 96-96 96V160m-32 192c0 28.4 34.5 42.8 54.6 22.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-20.1-20.1-54.6-5.9-54.6 22.6V352z" />
  </svg>
);

SvgCaretCircleRight.displayName = "SvgCaretCircleRight";
SvgCaretCircleRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleRight;
