import * as React from "react";

const SvgStickyNote = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0033.941-14.059l83.882-83.882A48 48 0 00448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z" />
  </svg>
);

SvgStickyNote.displayName = "SvgStickyNote";
SvgStickyNote.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStickyNote;