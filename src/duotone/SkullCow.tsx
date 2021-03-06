import * as React from "react";

const SvgSkullCow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M60.07 113.24C43.35 89.15 56.88 37.69 63 21.58a16 16 0 00-26.21-17C13.05 27.82 0 60.17 0 95.67 0 166.12 57.43 224 128 224h32v-64a63.33 63.33 0 018.88-32H96c-17.39 0-29.13-5-35.93-14.76zM603.26 4.57a16 16 0 00-26.21 17c6.07 16.11 19.6 67.57 2.88 91.66C573.13 123 561.39 128 544 128h-72.88a63.32 63.32 0 018.88 32v64h32c70.59 0 128-57.88 128-128.33 0-35.5-13-67.85-36.74-91.1z"
      opacity={0.4}
    />
    <path
      d="M416 96H224a64 64 0 00-64 64v128a64 64 0 0064 64l26.8 134.27A32 32 0 00282.19 512h75.53a32 32 0 0031.38-25.72L416 352a64 64 0 0064-64V160a64 64 0 00-64-64zM240 288a32 32 0 1132-32 32 32 0 01-32 32zm160 0a32 32 0 1132-32 32 32 0 01-32 32z"
      className="skull-cow_svg__fa-primary"
    />
  </svg>
);

SvgSkullCow.displayName = "SvgSkullCow";
SvgSkullCow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSkullCow;
