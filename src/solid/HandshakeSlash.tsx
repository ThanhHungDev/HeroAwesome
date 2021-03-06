import * as React from "react";

const SvgHandshakeSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M0 128.21V384h64a32 32 0 0032-32V184l-72.17-55.79zM48 320.1a16 16 0 11-16 16 16 16 0 0116-16zm80 31.81h18.3l90.5 81.89a64 64 0 0090-9.3l.2-.2 17.91 15.5a37.16 37.16 0 0052.29-5.39l8.8-10.82-278-214.87zm416-223.7V352.1a32 32 0 0032 32h64V128.21zm48 223.89a16 16 0 1116-16 16 16 0 01-16 16zM303.33 202.67l59.58-54.57a16 16 0 0121.59 23.61l-26.09 23.89L504 313.8a73.08 73.08 0 017.91 7.7V128L457.3 73.41A31.76 31.76 0 00434.7 64h-85.9a31.93 31.93 0 00-21.6 8.41l-88.07 80.64-25.64-19.81L289.09 64H205.3a32 32 0 00-22.6 9.41l-20.34 20.31L45.47 3.38A16 16 0 0023 6.19L3.38 31.46a16 16 0 002.81 22.45l588.34 454.72a16 16 0 0022.47-2.81l19.65-25.27a16 16 0 00-2.82-22.45z" />
  </svg>
);

SvgHandshakeSlash.displayName = "SvgHandshakeSlash";
SvgHandshakeSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandshakeSlash;
