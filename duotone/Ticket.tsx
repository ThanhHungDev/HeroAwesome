import * as React from "react";

const SvgTicket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M576 208v-96a48 48 0 00-48-48H48a48 48 0 00-48 48v96a48 48 0 010 96v96a48 48 0 0048 48h480a48 48 0 0048-48v-96a48 48 0 010-96zM400 400a16 16 0 1116-16 16 16 0 01-16 16zm0-64a16 16 0 1116-16 16 16 0 01-16 16zm0-64a16 16 0 1116-16 16 16 0 01-16 16zm0-64a16 16 0 1116-16 16 16 0 01-16 16zm0-64a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M400 304a16 16 0 1016 16 16 16 0 00-16-16zm0 64a16 16 0 1016 16 16 16 0 00-16-16zm0-224a16 16 0 10-16-16 16 16 0 0016 16zm0 96a16 16 0 1016 16 16 16 0 00-16-16zm0-64a16 16 0 1016 16 16 16 0 00-16-16z"
      className="ticket_svg__fa-primary"
    />
  </svg>
);

SvgTicket.displayName = "SvgTicket";
SvgTicket.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTicket;
