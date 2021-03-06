import * as React from "react";

const SvgHeadSideMask = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M.15 184.42C-2.17 244.21 23 298.06 64 334.87V512h160V316.51L3.67 156.25a182.28 182.28 0 00-3.52 28.17zM509.22 275c-21-47.13-48.5-151.75-73.12-186.75A208.11 208.11 0 00266.11 0H200C117 0 42.48 50.57 13.25 123.65L239.21 288h272.55a31.35 31.35 0 00-2.54-13zM320 224a32 32 0 1132-32 32.07 32.07 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M320 224a32 32 0 10-32-32 32.06 32.06 0 0032 32zm16 144h160l16-48H256v192h145.88a64 64 0 0060.71-43.76L464 464H336a16 16 0 010-32h138.67l10.67-32H336a16 16 0 010-32z"
      className="head-side-mask_svg__fa-primary"
    />
  </svg>
);

SvgHeadSideMask.displayName = "SvgHeadSideMask";
SvgHeadSideMask.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadSideMask;
