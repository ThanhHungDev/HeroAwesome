import * as React from "react";

const SvgFilePowerpoint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zM165.9 378.8V436a12 12 0 01-12 12h-30.8a12 12 0 01-12-12V236.2a12 12 0 0112-12h81c44.5 0 72.9 32.8 72.9 77 0 90.3-88.8 77.6-111.1 77.6zm27.8-107.6h-27.9v60.7h26.9c9.2 0 16.2-2.9 21.1-8.5 10-11.4 9.8-33.2.2-44.1-4.8-5.4-11.5-8.1-20.3-8.1z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM204.1 224.2h-81a12 12 0 00-12 12V436a12 12 0 0012 12h30.8a12 12 0 0012-12v-57.2c22.3 0 111.1 12.7 111.1-77.6 0-44.2-28.4-77-72.9-77zm9.7 99.2c-4.9 5.6-11.9 8.5-21.1 8.5h-26.9v-60.7h27.9c8.8 0 15.5 2.7 20.3 8.1 9.6 10.9 9.8 32.7-.2 44.1z"
      className="file-powerpoint_svg__fa-primary"
    />
  </svg>
);

SvgFilePowerpoint.displayName = "SvgFilePowerpoint";
SvgFilePowerpoint.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilePowerpoint;
