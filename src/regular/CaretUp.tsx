import * as React from "react";

const SvgCaretUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M48.048 352h223.895c42.638 0 64.151-51.731 33.941-81.941l-111.943-112c-18.745-18.745-49.137-18.746-67.882 0l-111.952 112C-16.042 300.208 5.325 352 48.048 352zM160 192l112 112H48l112-112z" />
  </svg>
);

SvgCaretUp.displayName = "SvgCaretUp";
SvgCaretUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretUp;
