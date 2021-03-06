import * as React from "react";

const SvgPencilRuler = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M138.25 127.05a7.92 7.92 0 01-11.2 0l-11.21-11.21a7.92 7.92 0 010-11.21L177.5 43 143.87 9.3A31.73 31.73 0 0099 9.3L9.29 99a31.74 31.74 0 000 44.86l100.17 100.19L244 109.49l-44.08-44.12zm364.46 241.1l-33.63-33.64-61.68 61.68a7.92 7.92 0 01-11.21 0L385 385a7.92 7.92 0 010-11.21l61.68-61.68L402.52 268 267.94 402.51l100.21 100.2a31.7 31.7 0 0044.85 0L502.71 413a31.72 31.72 0 000-44.85z"
      opacity={0.4}
    />
    <path
      d="M497.94 59.32l-45.25-45.25a48.05 48.05 0 00-67.95 0l-46 46 113.21 113.2 46-46a48 48 0 00-.01-67.95zM19.08 379.68L.33 487.12a21.23 21.23 0 0024.59 24.56l107.45-18.84 296.92-296.93L316.08 82.72z"
      className="pencil-ruler_svg__fa-primary"
    />
  </svg>
);

SvgPencilRuler.displayName = "SvgPencilRuler";
SvgPencilRuler.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPencilRuler;
