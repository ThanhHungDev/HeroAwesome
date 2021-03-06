import * as React from "react";

const SvgSoap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M416 192a95.42 95.42 0 01-30.94 70.21A95.8 95.8 0 01352 448H160a96 96 0 010-192h88.91A95.3 95.3 0 01224 192H96a96 96 0 00-96 96v128a96 96 0 0096 96h320a96 96 0 0096-96V288a96 96 0 00-96-96zm-96 64a64 64 0 10-64-64 64 64 0 0064 64zM208 96a48 48 0 10-48-48 48 48 0 0048 48zm176-32a32 32 0 10-32-32 32 32 0 0032 32zM160 288a64 64 0 000 128h192a64 64 0 000-128z" />
  </svg>
);

SvgSoap.displayName = "SvgSoap";
SvgSoap.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSoap;
