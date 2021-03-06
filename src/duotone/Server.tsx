import * as React from "react";

const SvgServer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M432 120a24 24 0 10-24-24 24 24 0 0024 24zm0 272a24 24 0 1024 24 24 24 0 00-24-24zm48-200H32a32 32 0 00-32 32v64a32 32 0 0032 32h448a32 32 0 0032-32v-64a32 32 0 00-32-32zm-112 88a24 24 0 1124-24 24 24 0 01-24 24zm64 0a24 24 0 1124-24 24 24 0 01-24 24z"
      opacity={0.4}
    />
    <path
      d="M456 256a24 24 0 10-24 24 24 24 0 0024-24zm24-224H32A32 32 0 000 64v64a32 32 0 0032 32h448a32 32 0 0032-32V64a32 32 0 00-32-32zm-112 88a24 24 0 1124-24 24 24 0 01-24 24zm64 0a24 24 0 1124-24 24 24 0 01-24 24zm48 232H32a32 32 0 00-32 32v64a32 32 0 0032 32h448a32 32 0 0032-32v-64a32 32 0 00-32-32zm-112 88a24 24 0 1124-24 24 24 0 01-24 24zm64 0a24 24 0 1124-24 24 24 0 01-24 24z"
      className="server_svg__fa-primary"
    />
  </svg>
);

SvgServer.displayName = "SvgServer";
SvgServer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgServer;
