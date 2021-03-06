import * as React from "react";

const SvgBrowser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM32 80c0-8.8 7.2-16 16-16h48v64H32V80zm448 352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160h448v272zm0-304H128V64h336c8.8 0 16 7.2 16 16v48z" />
  </svg>
);

SvgBrowser.displayName = "SvgBrowser";
SvgBrowser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBrowser;
