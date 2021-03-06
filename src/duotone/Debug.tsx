import * as React from "react";

const SvgDebug = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M159.12 338.69l24.8-16.54a78.87 78.87 0 01-6.77-22.72l-30.88 4.41a16 16 0 01-4.54-31.68l34.27-4.9v-.76l98.94 98.95a76.89 76.89 0 01-71.68-17.73l-26.39 17.59c-.15.11-.31.21-.47.31a16 16 0 01-17.28-26.93zm224.72-48.42a16 16 0 00-13.57-18.11l-34.27-4.9V244.9l34.27-4.9a16 16 0 10-4.54-31.68l-30.54 4.36a79.31 79.31 0 00-6.85-22.85l24.54-16.36a16 16 0 10-17.29-26.93l-.46.31-26 17.34a79.9 79.9 0 00-102.64-3l139.83 139.88 19.41 2.77a16 16 0 0018.11-13.57z"
      opacity={0.4}
    />
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 432c-101.46 0-184-82.54-184-184a182.84 182.84 0 0133.38-105.37l256 256A182.86 182.86 0 01256 440zm150.62-78.63l-256-256A182.84 182.84 0 01256 72c101.46 0 184 82.54 184 184a182.84 182.84 0 01-33.38 105.37z"
      className="debug_svg__fa-primary"
    />
  </svg>
);

SvgDebug.displayName = "SvgDebug";
SvgDebug.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDebug;
