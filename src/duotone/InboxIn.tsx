import * as React from "react";

const SvgInboxIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M528 512H48a48 48 0 01-48-48v-95.2a47.29 47.29 0 0110.7-30l94.4-118a12 12 0 0118.1-.7l27.6 29.5a12 12 0 01.6 15.7L107.6 320H200l32 64h112l32-64h92.3L424 264.6a12.16 12.16 0 01.8-15.9l28.1-28.9a12.12 12.12 0 0118 .9l94.6 118.2a47.77 47.77 0 0110.5 29.9V464a48 48 0 01-48 48z"
      opacity={0.4}
    />
    <path
      d="M171.5 160h61.9V17.1A17.16 17.16 0 01250.5 0h68.6a17.09 17.09 0 0117.1 17.1V160h68.3c17.8 0 26.7 21.5 14.1 34.1l-119.4 120a20 20 0 01-28.6-.3L157 193.8c-12.1-12.7-3.1-33.8 14.5-33.8z"
      className="inbox-in_svg__fa-primary"
    />
  </svg>
);

SvgInboxIn.displayName = "SvgInboxIn";
SvgInboxIn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgInboxIn;
