import * as React from "react";

const SvgColumns = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM240 448H48c-8.837 0-16-7.163-16-16V96h208v352zm240-16c0 8.837-7.163 16-16 16H272V96h208v336z" />
  </svg>
);

SvgColumns.displayName = "SvgColumns";
SvgColumns.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgColumns;
