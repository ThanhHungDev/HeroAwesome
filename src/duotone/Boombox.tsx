import * as React from "react";

const SvgBoombox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M592 160H48a48 48 0 00-48 48v256a48 48 0 0048 48h544a48 48 0 0048-48V208a48 48 0 00-48-48zM176 448a112 112 0 11112-112 112.12 112.12 0 01-112 112zm288 0a112 112 0 11112-112 112.12 112.12 0 01-112 112z"
      opacity={0.4}
    />
    <path
      d="M552 0H88a56.07 56.07 0 00-56 56v106.94A47.5 47.5 0 0148 160h32V56a8 8 0 018-8h464a8 8 0 018 8v104h32a47.5 47.5 0 0116 2.94V56a56.06 56.06 0 00-56-56zM256 144a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h64zm192 0a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h64zm-96 0a16 16 0 00-16-16h-32a16 16 0 00-16 16v16h64zm112 80a112 112 0 10112 112 112.12 112.12 0 00-112-112zm0 176a64 64 0 1164-64 64.07 64.07 0 01-64 64zM176 224a112 112 0 10112 112 112.12 112.12 0 00-112-112zm0 176a64 64 0 1164-64 64.07 64.07 0 01-64 64z"
      className="boombox_svg__fa-primary"
    />
  </svg>
);

SvgBoombox.displayName = "SvgBoombox";
SvgBoombox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoombox;
