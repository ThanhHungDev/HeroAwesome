import * as React from "react";

const SvgRedoAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M422.66 422.66a12 12 0 010 17l-.49.46A247.11 247.11 0 01256 504C119 504 8 393 8 256 8 119.19 119.65 7.76 256.46 8a247.12 247.12 0 01170.85 68.69l-56.62 56.56A166.73 166.73 0 00257.49 88C165.09 87.21 87.21 162 88 257.45 88.76 348 162.18 424 256 424a166.77 166.77 0 00110.63-41.56A12 12 0 01383 383z"
      opacity={0.4}
    />
    <path
      d="M504 57.94V192a24 24 0 01-24 24H345.94c-21.38 0-32.09-25.85-17-41L463 41c15.15-15.15 41-4.44 41 16.94z"
      className="redo-alt_svg__fa-primary"
    />
  </svg>
);

SvgRedoAlt.displayName = "SvgRedoAlt";
SvgRedoAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRedoAlt;
