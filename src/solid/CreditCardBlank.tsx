import * as React from "react";

const SvgCreditCardBlank = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M528 40H48C21.5 40 0 61.5 0 88v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V88c0-26.5-21.5-48-48-48zM160 404c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40zm192 0c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40z" />
  </svg>
);

SvgCreditCardBlank.displayName = "SvgCreditCardBlank";
SvgCreditCardBlank.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCreditCardBlank;
