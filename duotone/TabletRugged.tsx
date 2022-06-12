import * as React from "react";

const SvgTabletRugged = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M439.2 164.4a15.92 15.92 0 008.8-14.3V73.9a15.92 15.92 0 00-8.8-14.3L416 48a48 48 0 00-48-48H80a48 48 0 00-48 48L8.8 59.6A15.92 15.92 0 000 73.9v76.2a15.92 15.92 0 008.8 14.3L32 176v16L8.8 203.6A15.92 15.92 0 000 217.9v76.2a15.92 15.92 0 008.8 14.3L32 320v16L8.8 347.6A15.92 15.92 0 000 361.9v76.2a15.92 15.92 0 008.8 14.3L32 464a48 48 0 0048 48h288a48 48 0 0048-48l23.2-11.6a15.92 15.92 0 008.8-14.3v-76.2a15.92 15.92 0 00-8.8-14.3L416 336v-16l23.2-11.6a15.92 15.92 0 008.8-14.3v-76.2a15.92 15.92 0 00-8.8-14.3L416 192v-16zM352 432a16 16 0 01-16 16H112a16 16 0 01-16-16V80a16 16 0 0116-16h224a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M352 432a16 16 0 01-16 16H112a16 16 0 01-16-16V80a16 16 0 0116-16h224a16 16 0 0116 16z"
      className="tablet-rugged_svg__fa-primary"
    />
  </svg>
);

SvgTabletRugged.displayName = "SvgTabletRugged";
SvgTabletRugged.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTabletRugged;
