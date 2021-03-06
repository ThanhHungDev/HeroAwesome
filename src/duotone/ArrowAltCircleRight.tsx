import * as React from "react";

const SvgArrowAltCircleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm134.48 256.52L276.32 380.41c-7.49 7.67-20.48 2.22-20.48-8.57v-71.51H140a12.08 12.08 0 01-12-12.1v-64.56a12.08 12.08 0 0112-12.1h115.84v-71.41c0-10.79 12.89-16.24 20.48-8.57l114.16 115.89a12.08 12.08 0 010 17.04z"
      opacity={0.4}
    />
    <path
      d="M128 288.23v-64.56a12.08 12.08 0 0112-12.1h115.84v-71.41c0-10.79 12.89-16.24 20.48-8.57l114.16 115.89a12.08 12.08 0 010 17L276.32 380.41c-7.49 7.67-20.48 2.22-20.48-8.57v-71.51H140a12.08 12.08 0 01-12-12.1z"
      className="arrow-alt-circle-right_svg__fa-primary"
    />
  </svg>
);

SvgArrowAltCircleRight.displayName = "SvgArrowAltCircleRight";
SvgArrowAltCircleRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowAltCircleRight;
