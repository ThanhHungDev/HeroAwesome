import * as React from "react";

const SvgCaretCircleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm32-120l-96-96 96-96v192m32-192c0-28.4-34.5-42.8-54.6-22.6l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c20.1 20.1 54.6 5.9 54.6-22.6V160z" />
  </svg>
);

SvgCaretCircleLeft.displayName = "SvgCaretCircleLeft";
SvgCaretCircleLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleLeft;
