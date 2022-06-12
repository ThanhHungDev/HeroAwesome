import * as React from "react";

const SvgToothbrush = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 464H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zM48 224c-8.84 0-16 7.16-16 16v192h48V240c0-8.84-7.16-16-16-16H48zm368 0c-8.84 0-16 7.16-16 16v192h48V240c0-8.84-7.16-16-16-16h-16zm-272 0c-8.84 0-16 7.16-16 16v192h48V240c0-8.84-7.16-16-16-16h-16zm176 0c-8.84 0-16 7.16-16 16v192h48V240c0-8.84-7.16-16-16-16h-16zm-88 0c-8.84 0-16 7.16-16 16v192h48V240c0-8.84-7.16-16-16-16h-16zM64 192h352c35.35 0 64-28.65 64-64C480 57.31 422.69 0 352 0c23.62 23.62 6.89 64-26.51 64H64C28.65 64 0 92.65 0 128s28.65 64 64 64zm0-80h261.49c32.45 0 61.66-18.11 76.18-46.68C420.13 79.99 432 102.64 432 128c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16s7.18-16 16-16z" />
  </svg>
);

SvgToothbrush.displayName = "SvgToothbrush";
SvgToothbrush.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgToothbrush;