import * as React from "react";

const SvgMicrophoneAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M160 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S64 42.98 64 96v160c0 53.02 42.98 96 96 96zM96 96c0-35.29 28.71-64 64-64s64 28.71 64 64h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v32h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v32h-56c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56c0 35.29-28.71 64-64 64s-64-28.71-64-64V96zm216 96h-16c-4.42 0-8 3.58-8 8v56c0 73.46-62.2 132.68-136.73 127.71C83.3 379.18 32 319.61 32 251.49V200c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v50.34c0 83.39 61.64 156.12 144 164.43V480H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-72v-65.01C256.71 406.9 320 338.8 320 256v-56c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgMicrophoneAlt.displayName = "SvgMicrophoneAlt";
SvgMicrophoneAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrophoneAlt;
