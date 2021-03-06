import * as React from "react";

const SvgGrinSquint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm33.8 189.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 208l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48a12.07 12.07 0 010-20.6zm-147.6-48l80 48a12 12 0 010 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3-33.6-40.3c-8.6-10.3 3.8-24.9 15.4-18zm257.6 189c-9.3 55-83.2 93.3-143.8 93.3s-134.5-38.3-143.8-93.3a16 16 0 0120.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2a16.06 16.06 0 0120.7 17.9z"
      opacity={0.4}
    />
    <path
      d="M214.2 197.7l-80-48c-11.6-6.9-24 7.7-15.4 18l33.6 40.3-33.6 40.3c-8.6 10.4 3.9 24.8 15.4 18l80-48a12 12 0 000-20.6zm163 50.6L343.6 208l33.6-40.3c8.6-10.3-3.8-24.9-15.4-18l-80 48a12.07 12.07 0 000 20.6l80 48c11.5 6.8 24.1-7.6 15.4-18z"
      className="grin-squint_svg__fa-primary"
    />
  </svg>
);

SvgGrinSquint.displayName = "SvgGrinSquint";
SvgGrinSquint.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGrinSquint;
