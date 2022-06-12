import * as React from "react";

const SvgInbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 00422.311 64H153.689a48 48 0 00-39.938 21.374L8.062 243.908A47.994 47.994 0 000 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 00-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z" />
  </svg>
);

SvgInbox.displayName = "SvgInbox";
SvgInbox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgInbox;
