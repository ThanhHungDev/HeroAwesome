import * as React from "react";

const SvgInboxOut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M565.6 338.89a48.27 48.27 0 0110.4 29.9V464a48 48 0 01-48 48H48a48 48 0 01-48-48v-95.2a48.05 48.05 0 0110.5-30l94.4-118a12 12 0 0118.1-.7l27.6 29.5a12 12 0 01.6 15.7L107.6 320H200l32 64h112l32-64h92.4l-44.3-55.4a11.94 11.94 0 01.8-15.9l28.1-28.9a12 12 0 0118 .9z"
      opacity={0.4}
    />
    <path
      d="M239.7 302.89V160h-68.3c-17.8 0-26.7-21.5-14.1-34.1l119.4-120a20 20 0 0128.6.3l113.7 120c12.1 12.7 3.1 33.8-14.5 33.8h-61.9v142.9a17.18 17.18 0 01-17.2 17.1h-68.6a17.09 17.09 0 01-17.1-17.11z"
      className="inbox-out_svg__fa-primary"
    />
  </svg>
);

SvgInboxOut.displayName = "SvgInboxOut";
SvgInboxOut.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgInboxOut;
