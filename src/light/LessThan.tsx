import * as React from "react";

const SvgLessThan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M0 261.83c0 3.02 1.7 5.78 4.4 7.14l289.73 146.18c3.95 1.98 8.76.37 10.73-3.58l14.29-28.62c1.97-3.95.37-8.75-3.58-10.73L83.13 256l232.44-116.22c3.95-1.97 5.55-6.78 3.58-10.73l-14.29-28.62c-1.97-3.95-6.78-5.56-10.73-3.58L4.42 241.77A7.985 7.985 0 000 248.92v12.91z" />
  </svg>
);

SvgLessThan.displayName = "SvgLessThan";
SvgLessThan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLessThan;
