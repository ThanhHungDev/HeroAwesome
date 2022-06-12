import * as React from "react";

const SvgCompress = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v100h100c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v100H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h100v100c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12zm176 0V368h100c6.6 0 12-5.4 12-12v-24c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12z" />
  </svg>
);

SvgCompress.displayName = "SvgCompress";
SvgCompress.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCompress;
