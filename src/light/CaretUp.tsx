import * as React from "react";

const SvgCaretUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M32.032 352h255.93c28.425 0 42.767-34.488 22.627-54.627l-127.962-128c-12.496-12.496-32.758-12.497-45.255 0l-127.968 128C-10.695 317.472 3.55 352 32.032 352zM160 192l128 128H32l128-128z" />
  </svg>
);

SvgCaretUp.displayName = "SvgCaretUp";
SvgCaretUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretUp;
