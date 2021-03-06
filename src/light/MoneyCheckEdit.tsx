import * as React from "react";

const SvgMoneyCheckEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M425.23 406.49A32.06 32.06 0 00448 416h64a32 32 0 0032-32v-64a32 32 0 00-9.5-22.76L246.68 12.07a41.15 41.15 0 00-58.24 0l-48.38 48.4A41.48 41.48 0 00128 89.89 40.68 40.68 0 00140.34 119zM289.46 100L512 320v64h-64L228.1 161.4l61.36-61.4zM162.69 83.09l48.39-48.4A9.21 9.21 0 01217.6 32a9 9 0 016.45 2.69l44.53 44.54-61.36 61.38-44.53-44.54a9.18 9.18 0 010-12.98zM128 408a8 8 0 008 8h253.61l-31.71-32H136a8 8 0 00-8 8zm8-88h158.49l-31.71-32H136a8 8 0 00-8 8v16a8 8 0 008 8zm472-192H409.15l32.3 32H608v320H32V160h104l-18-18.12A73.25 73.25 0 01107.13 128H32a32 32 0 00-32 32v320a32 32 0 0032 32h576a32 32 0 0032-32V160a32 32 0 00-32-32z" />
  </svg>
);

SvgMoneyCheckEdit.displayName = "SvgMoneyCheckEdit";
SvgMoneyCheckEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoneyCheckEdit;
