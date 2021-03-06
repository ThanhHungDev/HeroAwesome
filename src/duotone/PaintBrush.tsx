import * as React from "react";

const SvgPaintBrush = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 49.55c0 16.14-6.52 31.64-13.9 46C385.06 306.53 349.06 352 287 352a92 92 0 01-22.39-3l-63.82-53.18a92.58 92.58 0 01-8.73-38.7c0-53.75 21.27-58 225.68-240.64C428.53 6.71 442.74 0 457.9 0 486 0 512 20.64 512 49.55z"
      opacity={0.4}
    />
    <path
      d="M255 382.68a86.64 86.64 0 011 9.13C256 468.23 203.87 512 128 512 37.94 512 0 439.62 0 357.27c9.79 6.68 44.14 34.35 55.25 34.35a15.26 15.26 0 0014.59-10c20.66-54.44 57.07-69.72 97.19-72.3z"
      className="paint-brush_svg__fa-primary"
    />
  </svg>
);

SvgPaintBrush.displayName = "SvgPaintBrush";
SvgPaintBrush.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPaintBrush;
