import * as React from "react";

const SvgTree = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M224 416v24.45l30.29 48.4A16 16 0 01240 512h-96a16 16 0 01-14.31-23.16L160 440.46V416z"
      opacity={0.4}
    />
    <path
      d="M23.14 416a23.19 23.19 0 01-21-13.25 22.11 22.11 0 013.55-24.25L85.58 288H55a22.72 22.72 0 01-20.83-13 22.08 22.08 0 013.27-24l78.14-91H86.69a22.67 22.67 0 01-20.87-13.6 22.27 22.27 0 014.24-24.08L180.34 4.84c6-6.45 17.29-6.45 23.32 0l110.27 117.48a22.25 22.25 0 014.24 24.08 22.66 22.66 0 01-20.86 13.6h-28.89l78.13 90.89a22 22 0 013.28 24A22.72 22.72 0 01329.05 288h-30.63l79.89 90.49a22.11 22.11 0 013.56 24.26 23.19 23.19 0 01-21 13.25z"
      className="tree_svg__fa-primary"
    />
  </svg>
);

SvgTree.displayName = "SvgTree";
SvgTree.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTree;
