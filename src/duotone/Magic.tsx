import * as React from "react";

const SvgMagic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M80 0L53.34 53.33 0 80l53.34 26.67L80 160l26.66-53.33L160 80l-53.34-26.67zm192 48l-32-16-16-32-16 32-32 16 32 16 16 32 16-32zm186.66 293.33L432 288l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368zM399 243.07l86.6-86.55 17-17a32 32 0 000-45.26l-17-17-50.86-50.86-17-17a32 32 0 00-45.25 0l-17 17L269 112.94l-39.62 39.6 39.61 39.61 50.91 50.91 39.59 39.58zm-90.5-90.52L395.14 66l50.91 50.91-86.6 86.55z"
      opacity={0.4}
    />
    <path
      d="M359.44 282.64l-220 220a32 32 0 01-45.25 0L9.38 417.77a32 32 0 010-45.25l220-220z"
      className="magic_svg__fa-primary"
    />
  </svg>
);

SvgMagic.displayName = "SvgMagic";
SvgMagic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMagic;
