import * as React from "react";

const SvgMoneyBillAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M101.22 112A112.5 112.5 0 0148 165.22v181.56A112.5 112.5 0 01101.22 400h437.56A112.5 112.5 0 01592 346.78V165.22A112.5 112.5 0 01538.78 112zM320 368c-53 0-96-50.16-96-112s43-112 96-112 96 50.14 96 112-43 112-96 112z"
      opacity={0.4}
    />
    <path
      d="M616 64H24A24 24 0 000 88v336a24 24 0 0024 24h592a24 24 0 0024-24V88a24 24 0 00-24-24zm-24 282.78A112.5 112.5 0 00538.78 400H101.22A112.5 112.5 0 0048 346.78V165.22A112.5 112.5 0 00101.22 112h437.56A112.5 112.5 0 00592 165.22zM352 288h-16v-88a8 8 0 00-8-8h-13.58a24 24 0 00-13.31 4l-15.33 10.22a8 8 0 00-2.22 11.08l8.88 13.31a8 8 0 0011.08 2.22l.47-.31V288H288a8 8 0 00-8 8v16a8 8 0 008 8h64a8 8 0 008-8v-16a8 8 0 00-8-8z"
      className="money-bill-alt_svg__fa-primary"
    />
  </svg>
);

SvgMoneyBillAlt.displayName = "SvgMoneyBillAlt";
SvgMoneyBillAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMoneyBillAlt;
