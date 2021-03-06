import * as React from "react";

const SvgIdCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M0 128v304a48 48 0 0048 48h480a48 48 0 0048-48V128zm176 64a64 64 0 11-64 64 64 64 0 0164-64zm93.3 224H82.7c-10.4 0-18.8-10-15.6-19.8A64.09 64.09 0 01128 352h8.2a103 103 0 0079.6 0h8.2a64.09 64.09 0 0160.9 44.2c3.2 9.9-5.2 19.8-15.6 19.8zM512 344a8 8 0 01-8 8H360a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-64a8 8 0 01-8 8H360a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-64a8 8 0 01-8 8H360a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M224 352h-8.2a103 103 0 01-79.6 0H128a64.09 64.09 0 00-60.9 44.2C63.9 406 72.3 416 82.7 416h186.6c10.4 0 18.8-9.9 15.6-19.8A64.09 64.09 0 00224 352zM528 32H48A48 48 0 000 80v48h576V80a48 48 0 00-48-48zM176 320a64 64 0 10-64-64 64 64 0 0064 64z"
      className="id-card_svg__fa-primary"
    />
  </svg>
);

SvgIdCard.displayName = "SvgIdCard";
SvgIdCard.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIdCard;
