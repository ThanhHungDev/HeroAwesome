import * as React from "react";

const SvgUndoAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M129 383a12 12 0 0116.37-.56A166.77 166.77 0 00256 424c93.82 0 167.24-76 168-166.55C424.79 162 346.91 87.21 254.51 88a166.73 166.73 0 00-113.2 45.25L84.69 76.69A247.12 247.12 0 01255.54 8C392.35 7.76 504 119.19 504 256c0 137-111 248-248 248a247.11 247.11 0 01-166.18-63.91l-.49-.46a12 12 0 010-17z"
      opacity={0.4}
    />
    <path
      d="M49 41l134.06 134c15.09 15.15 4.38 41-17 41H32a24 24 0 01-24-24V57.94C8 36.56 33.85 25.85 49 41z"
      className="undo-alt_svg__fa-primary"
    />
  </svg>
);

SvgUndoAlt.displayName = "SvgUndoAlt";
SvgUndoAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUndoAlt;
