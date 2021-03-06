import * as React from "react";

const SvgHomeAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M541 229.16l-232.85-190a32.16 32.16 0 00-40.38 0L35 229.16a8 8 0 00-1.16 11.24l10.1 12.41a8 8 0 0011.2 1.19L96 220.62v243a16 16 0 0016 16h128a16 16 0 0016-16v-128l64 .3V464a16 16 0 0016 16l128-.33a16 16 0 0016-16V220.62L520.86 254a8 8 0 0011.25-1.16l10.1-12.41a8 8 0 00-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 00-15.95-16l-96-.27a16 16 0 00-16.05 16v128.14H128V194.51L288 63.94l160 130.57z" />
  </svg>
);

SvgHomeAlt.displayName = "SvgHomeAlt";
SvgHomeAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHomeAlt;
