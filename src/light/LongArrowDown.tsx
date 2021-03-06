import * as React from "react";

const SvgLongArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M252.485 343.03l-7.07-7.071c-4.686-4.686-12.284-4.686-16.971 0L145 419.887V44c0-6.627-5.373-12-12-12h-10c-6.627 0-12 5.373-12 12v375.887l-83.444-83.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l116 116.485c4.686 4.686 12.284 4.686 16.971 0l116-116.485c4.686-4.686 4.686-12.284-.001-16.97z" />
  </svg>
);

SvgLongArrowDown.displayName = "SvgLongArrowDown";
SvgLongArrowDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLongArrowDown;
