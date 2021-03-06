import * as React from "react";

const SvgLongArrowAltDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M223.351 320H145V44c0-6.627-5.373-12-12-12h-10c-6.627 0-12 5.373-12 12v276H32.652c-29.388 0-43.268 34.591-23.231 54.627l95.952 96c12.497 12.496 32.757 12.497 45.255 0l95.955-96C266.56 354.65 252.85 320 223.351 320zM128 448l-96-96h192l-96 96z" />
  </svg>
);

SvgLongArrowAltDown.displayName = "SvgLongArrowAltDown";
SvgLongArrowAltDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLongArrowAltDown;
