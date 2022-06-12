import * as React from "react";

const SvgFire = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M216 24.01c0-23.8-31.16-33.11-44.15-13.04C76.55 158.25 200 238.73 200 288c0 22.06-17.94 40-40 40s-40-17.94-40-40V182.13c0-19.39-21.86-30.76-37.73-19.68C30.75 198.38 0 257.28 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-192.85-168-295.99zM192 464c-79.4 0-144-64.6-144-144 0-28.66 8.56-64.71 24-88v56c0 48.52 39.48 88 88 88s88-39.48 88-88c0-64.27-88-120-64-208 40 88 152 121.77 152 240 0 79.4-64.6 144-144 144z" />
  </svg>
);

SvgFire.displayName = "SvgFire";
SvgFire.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFire;