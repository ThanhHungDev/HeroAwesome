import * as React from "react";

const SvgCauldron = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M160 0a32 32 0 1032 32 32 32 0 00-32-32zm112 32a48 48 0 1048 48 48 48 0 00-48-48zM96 288a32 32 0 0064 0V160H96z"
      opacity={0.4}
    />
    <path
      d="M434 224h-19.79c21.4 38.52 33.79 81.28 33.79 121.6 0 39.08-11.82 70.65-32 95.53V488a24 24 0 01-48 0v-7.49C329.05 501.81 278.86 512 224 512s-105-10.19-144-31.49V488a24 24 0 01-48 0v-46.87C11.82 416.25 0 384.68 0 345.6c0-40.32 12.39-83.08 33.79-121.6H14c-7.73 0-14-5.37-14-12v-40c0-6.63 6.27-12 14-12h82v128a32 32 0 0064 0V160h274c7.73 0 14 5.37 14 12v40c0 6.63-6.27 12-14 12z"
      className="cauldron_svg__fa-primary"
    />
  </svg>
);

SvgCauldron.displayName = "SvgCauldron";
SvgCauldron.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCauldron;
