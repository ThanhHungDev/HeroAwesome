import * as React from "react";

const SvgBarcodeRead = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M144 448H64v-80a16 16 0 00-16-16H16a16 16 0 00-16 16v128a16 16 0 0016 16h128a16 16 0 0016-16v-32a16 16 0 00-16-16zm0-448H16A16 16 0 000 16v128a16 16 0 0016 16h32a16 16 0 0016-16V64h80a16 16 0 0016-16V16a16 16 0 00-16-16zm480 0H496a16 16 0 00-16 16v32a16 16 0 0016 16h80v80a16 16 0 0016 16h32a16 16 0 0016-16V16a16 16 0 00-16-16zm0 352h-32a16 16 0 00-16 16v80h-80a16 16 0 00-16 16v32a16 16 0 0016 16h128a16 16 0 0016-16V368a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M184 128h-48a8 8 0 00-8 8v240a8 8 0 008 8h48a8 8 0 008-8V136a8 8 0 00-8-8zm64 0h-16a8 8 0 00-8 8v240a8 8 0 008 8h16a8 8 0 008-8V136a8 8 0 00-8-8zm160 0h-48a8 8 0 00-8 8v240a8 8 0 008 8h48a8 8 0 008-8V136a8 8 0 00-8-8zm-96 0h-16a8 8 0 00-8 8v240a8 8 0 008 8h16a8 8 0 008-8V136a8 8 0 00-8-8zm192 0h-48a8 8 0 00-8 8v240a8 8 0 008 8h48a8 8 0 008-8V136a8 8 0 00-8-8z"
      className="barcode-read_svg__fa-primary"
    />
  </svg>
);

SvgBarcodeRead.displayName = "SvgBarcodeRead";
SvgBarcodeRead.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBarcodeRead;
