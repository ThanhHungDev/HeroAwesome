import * as React from "react";

const SvgCaretRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 224 512" {...props}>
    <path d="M0 144.048v223.895c0 42.638 51.731 64.151 81.941 33.941l112-111.943c18.745-18.745 18.746-49.137 0-67.882l-112-111.952C51.792 79.958 0 101.325 0 144.048zM160 256L48 368V144l112 112z" />
  </svg>
);

SvgCaretRight.displayName = "SvgCaretRight";
SvgCaretRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretRight;
