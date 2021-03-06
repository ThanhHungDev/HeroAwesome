import * as React from "react";

const SvgSpade = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M462.3 387.76c-50.48 39.95-123.38 36-173.87-2.43-.21-3.22-.41-6.44-.43-10V272.14a16 16 0 00-16-16h-32a16 16 0 00-16 16v103.15c0 3.57-.2 6.78-.4 10-50.54 38.53-123.41 42.46-173.93 2.49C-13.1 338-16.41 248.58 39.9 194.61L233.4 9a33 33 0 0145.28 0l193.5 185.62c56.21 53.96 52.9 143.38-9.88 193.14z"
      opacity={0.4}
    />
    <path
      d="M367.31 486.6A32 32 0 01336 512H176a32 32 0 01-13-61.29c52.19-23.21 60.91-38.91 61-75.61V272a16 16 0 0116-16h32a16 16 0 0116 16v103.1c.19 37.5 9.41 52.61 61 75.61a32.08 32.08 0 0118.31 35.89z"
      className="spade_svg__fa-primary"
    />
  </svg>
);

SvgSpade.displayName = "SvgSpade";
SvgSpade.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpade;
