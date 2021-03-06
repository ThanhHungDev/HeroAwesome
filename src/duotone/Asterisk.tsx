import * as React from "react";

const SvgAsterisk = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M479 177.64l-.41.23-182.5 100.45 3.45 209.17A24 24 0 01276.06 512h-39.55a24 24 0 01-24-24v-.52L216 278 33.47 177.91A24 24 0 0124 145.32l.25-.45 19.5-33.74a24.07 24.07 0 0132.89-8.75l.38.23L256 208l179-105.39a24.07 24.07 0 0133.05 8.12l.23.4 19.5 33.74a24 24 0 01-8.78 32.77z"
      opacity={0.4}
    />
    <path
      d="M488 366.68l-.25.45-19.5 33.74a24.07 24.07 0 01-32.89 8.75l-.38-.23L256 304 77 409.39a24.07 24.07 0 01-33-8.12l-.23-.4-19.5-33.74a24 24 0 018.83-32.77l.41-.23 182.4-100.45-3.45-209.17A24 24 0 01235.94 0h39.55a24 24 0 0124 24v.52L296 234l182.53 100.09a24 24 0 019.47 32.59z"
      className="asterisk_svg__fa-primary"
    />
  </svg>
);

SvgAsterisk.displayName = "SvgAsterisk";
SvgAsterisk.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAsterisk;
