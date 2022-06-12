import * as React from "react";

const SvgClipboardList = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M336 64h-80a64 64 0 0164 64H64a64 64 0 0164-64H48a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V112a48 48 0 00-48-48zM96 424a24 24 0 1124-24 23.94 23.94 0 01-24 24zm0-96a24 24 0 1124-24 23.94 23.94 0 01-24 24zm0-96a24 24 0 1124-24 23.94 23.94 0 01-24 24zm224 176a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-96a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-96a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M96 376a24 24 0 1024 24 23.94 23.94 0 00-24-24zm0-96a24 24 0 1024 24 23.94 23.94 0 00-24-24zm0-96a24 24 0 1024 24 23.94 23.94 0 00-24-24zM256 64a64 64 0 00-128 0 64 64 0 00-64 64h256a64 64 0 00-64-64zm-64 24a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
      className="clipboard-list_svg__fa-primary"
    />
  </svg>
);

SvgClipboardList.displayName = "SvgClipboardList";
SvgClipboardList.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClipboardList;
