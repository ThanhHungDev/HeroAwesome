import * as React from "react";

const SvgToothbrush = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM64 416V232c0-4.42-3.58-8-8-8H40c-4.42 0-8 3.58-8 8v184h32zm64 0V232c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v184h32zm64 0V232c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v184h32zm64 0V232c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v184h32zm64 0V232c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v184h32zm64 0V232c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v184h32zm32 0h32V232c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v184zM64 192h352c35.35 0 64-28.65 64-64C480 57.31 422.69 0 352 0c23.62 23.62 6.89 64-26.51 64H64C28.65 64 0 92.65 0 128s28.65 64 64 64z" />
  </svg>
);

SvgToothbrush.displayName = "SvgToothbrush";
SvgToothbrush.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgToothbrush;