import * as React from "react";

const SvgHeadSideCough = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M616 304a24 24 0 10-24-24 24 24 0 0024 24zm-64 112a24 24 0 1024 24 24 24 0 00-24-24zm-64-56a24 24 0 1024 24 24 24 0 00-24-24zm128 104a24 24 0 1024 24 24 24 0 00-24-24zm0-104a24 24 0 1024 24 24 24 0 00-24-24zm-64-40a24 24 0 1024 24 24 24 0 00-24-24zm-74.78-45c-21-47.12-48.5-151.75-73.12-186.75A208.13 208.13 0 00234.1 0H192C86 0 0 86 0 192c0 56.75 24.75 107.62 64 142.88V512h224v-32h64a64 64 0 0064-64h-96a32 32 0 010-64h96v-32h32a32 32 0 0029.22-45zM288 224a32 32 0 1132-32 32.07 32.07 0 01-32 32z" />
  </svg>
);

SvgHeadSideCough.displayName = "SvgHeadSideCough";
SvgHeadSideCough.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadSideCough;
