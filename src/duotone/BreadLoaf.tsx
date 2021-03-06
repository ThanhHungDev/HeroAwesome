import * as React from "react";

const SvgBreadLoaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M420 256h-4v192a32 32 0 01-32 32H96a32 32 0 01-32-32V256h-4c-33.14 0-60-28.65-60-64C0 103.63 107.45 32 240 32s240 71.63 240 160c0 35.35-26.86 64-60 64z"
      opacity={0.4}
    />
    <path
      d="M640 192c0 35.35-26.86 64-60 64h-4v192a32 32 0 01-32 32H439.1a63.25 63.25 0 008.9-32V283.46c37.08-12.4 64-48.71 64-91.46 0-67.38-46.8-125.61-119.19-159.76 2.41 0 4.76-.24 7.19-.24 132.55 0 240 71.63 240 160z"
      className="bread-loaf_svg__fa-primary"
    />
  </svg>
);

SvgBreadLoaf.displayName = "SvgBreadLoaf";
SvgBreadLoaf.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBreadLoaf;
