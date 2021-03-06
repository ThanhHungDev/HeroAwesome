import * as React from "react";

const SvgFileImport = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 488v.12A23.94 23.94 0 01488 512H151.88A23.94 23.94 0 01128 488V352h127.63v64.9c0 14.27 17.28 21.34 27.37 11.27L378.56 332a17 17 0 000-23.93l-95.49-96.25c-10.09-10.07-27.37-3-27.37 11.27v65H128V23.88A23.94 23.94 0 01152 0h232v112a16 16 0 0016 16h112z"
      opacity={0.4}
    />
    <path
      d="M505 105L407.1 7a24 24 0 00-17-7H384v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM283.07 211.82c-10.09-10.07-27.37-3-27.37 11.27v65H16a16 16 0 00-16 16V336a16 16 0 0016 16h239.63v64.9c0 14.27 17.28 21.34 27.37 11.27L378.56 332a17 17 0 000-23.93z"
      className="file-import_svg__fa-primary"
    />
  </svg>
);

SvgFileImport.displayName = "SvgFileImport";
SvgFileImport.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileImport;
