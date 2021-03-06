import * as React from "react";

const SvgWatch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M192 80a176 176 0 10176 176A176 176 0 00192 80zm71.8 219.8L245 325.7a11.91 11.91 0 01-16.62 2.73l-.18-.13-59.3-43.2a12 12 0 01-4.9-9.7V160a12 12 0 0112-12h32a12 12 0 0112 12v93l41.2 30a12.07 12.07 0 012.6 16.8z"
      opacity={0.4}
    />
    <path
      d="M208 148h-32a12 12 0 00-12 12v115.4a12 12 0 004.9 9.7l59.3 43.2.18.13A11.91 11.91 0 00245 325.7l18.8-25.9a12.07 12.07 0 00-2.6-16.8L220 253v-93a12 12 0 00-12-12zm-16 284a175.5 175.5 0 01-128-55.21V488a23.94 23.94 0 0023.88 24H296a23.94 23.94 0 0024-23.88V376.79A175.5 175.5 0 01192 432zM296.12 0H88a23.94 23.94 0 00-24 23.88v111.33a176 176 0 01256 0V24a23.94 23.94 0 00-23.88-24z"
      className="watch_svg__fa-primary"
    />
  </svg>
);

SvgWatch.displayName = "SvgWatch";
SvgWatch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWatch;
