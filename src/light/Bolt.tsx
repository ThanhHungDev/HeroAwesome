import * as React from "react";

const SvgBolt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.3 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36zM140.3 436.9l33.5-141.6 9.3-39.4h-150L63 32h125.9l-38.7 118-13.8 42h145.7L140.3 436.9z" />
  </svg>
);

SvgBolt.displayName = "SvgBolt";
SvgBolt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBolt;