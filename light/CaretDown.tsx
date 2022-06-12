import * as React from "react";

const SvgCaretDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M287.968 160H32.038c-28.425 0-42.767 34.488-22.627 54.627l127.962 128c12.496 12.496 32.758 12.497 45.255 0l127.968-128C330.695 194.528 316.45 160 287.968 160zM160 320L32 192h256L160 320z" />
  </svg>
);

SvgCaretDown.displayName = "SvgCaretDown";
SvgCaretDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretDown;
