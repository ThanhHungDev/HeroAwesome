import * as React from "react";

const SvgClipboardUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M336 63h-80v1a64 64 0 0164 64H64a64 64 0 0164-64v-1H48a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V111a48 48 0 00-48-48zM192 192a64 64 0 11-64 64 64 64 0 0164-64zm112 236.8c0 10.61-10 19.2-22.4 19.2H102.4C90 448 80 439.4 80 428.8v-19.2c0-31.81 30.09-57.6 67.2-57.6h5a103.22 103.22 0 0079.7 0h5c37.11 0 67.2 25.79 67.2 57.6z"
      opacity={0.4}
    />
    <path
      d="M236.9 352h-5a103.22 103.22 0 01-79.7 0h-5c-37.11 0-67.2 25.79-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2h179.2c12.4 0 22.4-8.59 22.4-19.2l.1-19.2c0-31.81-30.1-57.6-67.2-57.6zM128 256a64 64 0 1064-64 64 64 0 00-64 64zM256 64a64 64 0 00-128 0 64 64 0 00-64 64h256a64 64 0 00-64-64zm-64 24a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
      className="clipboard-user_svg__fa-primary"
    />
  </svg>
);

SvgClipboardUser.displayName = "SvgClipboardUser";
SvgClipboardUser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClipboardUser;
