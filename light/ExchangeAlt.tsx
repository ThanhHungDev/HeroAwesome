import * as React from "react";

const SvgExchangeAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M12 192h372v56c0 29.552 36.528 43.072 55.917 21.26l64-72c10.777-12.124 10.777-30.395 0-42.519l-64-72C420.535 60.936 384 74.436 384 104v56H12c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12zm404-88l64 72-64 72V104zm84 216H128v-56c0-29.552-36.528-43.072-55.917-21.26l-64 72c-10.777 12.124-10.777 30.395 0 42.519l64 72C91.465 451.064 128 437.564 128 408v-56h372c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12zM96 408l-64-72 64-72v144z" />
  </svg>
);

SvgExchangeAlt.displayName = "SvgExchangeAlt";
SvgExchangeAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgExchangeAlt;
