import * as React from "react";

const SvgCoffinCross = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M288 192a16 16 0 01-16 16h-56v128a16 16 0 01-16 16h-16a16 16 0 01-16-16V208h-56a16 16 0 01-16-16v-16a16 16 0 0116-16h56v-48a16 16 0 0116-16h16a16 16 0 0116 16v48h56a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M374.44 115.19L266.71 9.37a32.93 32.93 0 00-23-9.37H140.33a32.89 32.89 0 00-23 9.37L9.54 115.19A31.61 31.61 0 001 145.58l87.1 342.18A32.49 32.49 0 00119.69 512h144.62a32.47 32.47 0 0031.61-24.24L383 145.58a31.67 31.67 0 00-8.56-30.39zM288 192a16 16 0 01-16 16h-56v128a16 16 0 01-16 16h-16a16 16 0 01-16-16V208h-56a16 16 0 01-16-16v-16a16 16 0 0116-16h56v-48a16 16 0 0116-16h16a16 16 0 0116 16v48h56a16 16 0 0116 16z"
      className="coffin-cross_svg__fa-primary"
    />
  </svg>
);

SvgCoffinCross.displayName = "SvgCoffinCross";
SvgCoffinCross.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCoffinCross;
