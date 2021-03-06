import * as React from "react";

const SvgFileExport = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M384 352.05v136.07A23.94 23.94 0 01360 512H23.88A23.94 23.94 0 010 488V23.88A23.94 23.94 0 0124 0h232v112a16 16 0 0016 16h112v160.05H208a16 16 0 00-16 16v32a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M272 128h112v-6.1a23.9 23.9 0 00-7-16.9L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16zm299 180.05l-95.61-96.5c-10.1-10.1-27.41-3-27.41 11.3v65.2H208a16 16 0 00-16 16v32a16 16 0 0016 16h239.93v65.1c0 14.3 17.31 21.4 27.41 11.3l95.71-96.4a17 17 0 00-.05-24z"
      className="file-export_svg__fa-primary"
    />
  </svg>
);

SvgFileExport.displayName = "SvgFileExport";
SvgFileExport.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileExport;
