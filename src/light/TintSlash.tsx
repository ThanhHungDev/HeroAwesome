import * as React from "react";

const SvgTintSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M320 480c-79.4 0-144-65.5-144-146.1 0-33.4 11.1-59.5 28.4-87.5l-25.3-20c-20.5 32.7-35.1 65.1-35.1 107.4 0 98.4 78.7 178.1 176 178.1 55.5 0 104.9-26 137.1-66.5l-25.7-20.2C405 458.4 365.2 480 320 480zm0-443.9c23.8 77.5 60.1 129.3 89.3 171.1 18.4 26.4 33.7 48.5 43.5 71.9l41.8 32.9c-12-96-101.6-142.2-145.3-289.9C345.2 7.5 332.6 0 320 0c-12.4 0-24.7 7.2-29.2 22.1-11.3 38.2-25.8 69.6-41.2 97l25.4 20c16.5-28.9 32.5-62.4 45-103zm317 449.1L23 1.8C19.6-1 14.5-.5 11.8 3l-10 12.5C-1 19-.4 24 3 26.7l614 483.5c3.4 2.8 8.5 2.2 11.2-1.2l10-12.5c2.8-3.5 2.3-8.5-1.2-11.3z" />
  </svg>
);

SvgTintSlash.displayName = "SvgTintSlash";
SvgTintSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTintSlash;