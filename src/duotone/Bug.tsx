import * as React from "react";

const SvgBug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M369 112H145a112 112 0 01224 0z" opacity={0.4} />
    <path
      d="M512 288.9c-.48 17.43-15.22 31.1-32.66 31.1H424v16a143.4 143.4 0 01-13.6 61.14l60.23 60.23a32 32 0 01-45.26 45.26l-54.73-54.74A143.42 143.42 0 01280 480V236a12 12 0 00-12-12h-24a12 12 0 00-12 12v244a143.42 143.42 0 01-90.64-32.11l-54.73 54.74a32 32 0 01-45.26-45.26l60.23-60.23A143.4 143.4 0 0188 336v-16H32.67C15.23 320 .49 306.33 0 288.9A32 32 0 0132 256h56v-58.74l-46.63-46.63a32 32 0 0145.26-45.26L141.25 160h229.49l54.63-54.63a32 32 0 0145.26 45.26L424 197.26V256h56a32 32 0 0132 32.9z"
      className="bug_svg__fa-primary"
    />
  </svg>
);

SvgBug.displayName = "SvgBug";
SvgBug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBug;
