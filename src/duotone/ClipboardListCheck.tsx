import * as React from "react";

const SvgClipboardListCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M336 64h-80a64 64 0 0164 64H64a64 64 0 0164-64H48a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V112a48 48 0 00-48-48zM65.6 241.4l12.7-12.6a5.37 5.37 0 017.6 0l20.6 20.8 47.6-47.2a5.37 5.37 0 017.6 0l12.6 12.7a5.37 5.37 0 010 7.6l-64.2 63.6a5.37 5.37 0 01-7.6 0L65.6 249a5.37 5.37 0 010-7.6zM96 392a24 24 0 1124-24 23.94 23.94 0 01-24 24zm224-16a8 8 0 01-8 8H168a8 8 0 01-8-8v-16a8 8 0 018-8h144a8 8 0 018 8zm0-96c0 4.4-4.3 8-9.6 8H154.1l32.3-32h124c5.3 0 9.6 3.6 9.6 8z"
      opacity={0.4}
    />
    <path
      d="M96 344a24 24 0 1024 24 23.94 23.94 0 00-24-24zm65.7-141.6a5.37 5.37 0 00-7.6 0l-47.6 47.2-20.6-20.8a5.37 5.37 0 00-7.6 0l-12.7 12.6a5.37 5.37 0 000 7.6l36.9 37.3a5.37 5.37 0 007.6 0l64.2-63.6a5.37 5.37 0 000-7.6zM256 64a64 64 0 00-128 0 64 64 0 00-64 64h256a64 64 0 00-64-64zm-64 24a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
      className="clipboard-list-check_svg__fa-primary"
    />
  </svg>
);

SvgClipboardListCheck.displayName = "SvgClipboardListCheck";
SvgClipboardListCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClipboardListCheck;
