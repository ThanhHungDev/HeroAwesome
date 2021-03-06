import * as React from "react";

const SvgLips = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M639.88 224a63 63 0 01-4.88 28.05C607 318.51 522.4 480 360.71 480h-81.43C117.59 480 33 318.51 5 252.06A62.88 62.88 0 01.12 224H64s85.34 96 256 96 256-96 256-96z"
      opacity={0.4}
    />
    <path
      d="M.12 224a61.44 61.44 0 018.74-28.32C60.53 110 173.69 32 222.28 32c0 0 32.57 0 97.72 50 65.15-50 97.72-50 97.72-50 48.59 0 161.75 78 213.42 163.68a61.6 61.6 0 018.74 28.32H576s-64-32-160-32l-35.38 8.84A252.29 252.29 0 01320 208a252.29 252.29 0 01-60.62-7.16L224 192c-96 0-160 32-160 32z"
      className="lips_svg__fa-primary"
    />
  </svg>
);

SvgLips.displayName = "SvgLips";
SvgLips.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLips;
