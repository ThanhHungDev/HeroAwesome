import * as React from "react";

const SvgAddressCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M528 32H48A48 48 0 000 80v352a48 48 0 0048 48h480a48 48 0 0048-48V80a48 48 0 00-48-48zm-352 96a64 64 0 11-64 64 64.06 64.06 0 0164-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5a103 103 0 0079.6 0h5c37.1 0 67.2 25.8 67.2 57.6zM512 312a8 8 0 01-8 8H360a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-64a8 8 0 01-8 8H360a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-64a8 8 0 01-8 8H360a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M176 256a64 64 0 10-64-64 64.06 64.06 0 0064 64zm44.8 32h-5a103 103 0 01-79.6 0h-5C94.1 288 64 313.8 64 345.6v19.2c0 10.6 10 19.2 22.4 19.2h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6z"
      className="address-card_svg__fa-primary"
    />
  </svg>
);

SvgAddressCard.displayName = "SvgAddressCard";
SvgAddressCard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAddressCard;
