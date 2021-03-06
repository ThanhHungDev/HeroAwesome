import * as React from "react";

const SvgMailbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M432 64H144a144 144 0 01144 144v208a32 32 0 01-32 32h288a32 32 0 0032-32V208A144 144 0 00432 64zm80 208a16 16 0 01-16 16h-32a16 16 0 01-16-16v-48h-56a8 8 0 01-8-8v-16a8 8 0 018-8h104a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M143.93 64C64.2 64 0 129.65 0 209.38V416a32 32 0 0032 32h224a32 32 0 0032-32V208A144 144 0 00143.93 64zM224 240a16 16 0 01-16 16H80a16 16 0 01-16-16v-32a16 16 0 0116-16h128a16 16 0 0116 16zm272-48H392a8 8 0 00-8 8v16a8 8 0 008 8h56v48a16 16 0 0016 16h32a16 16 0 0016-16v-64a16 16 0 00-16-16z"
      className="mailbox_svg__fa-primary"
    />
  </svg>
);

SvgMailbox.displayName = "SvgMailbox";
SvgMailbox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMailbox;
