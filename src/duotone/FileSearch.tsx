import * as React from "react";

const SvgFileSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M300.59 257.71a160.1 160.1 0 0083.41 209v21.45A23.94 23.94 0 01360 512H23.88A23.94 23.94 0 010 488V23.88A23.94 23.94 0 0124 0h232v112a16 16 0 0016 16h112v45.33a160.34 160.34 0 00-83.41 84.38z"
      opacity={0.4}
    />
    <path
      d="M384 121.9a23.9 23.9 0 00-7-16.9L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112zm251.31 340.16l-77.41-77.41A126.65 126.65 0 00576 320a128 128 0 10-128 128c23.7 0 45.61-6.88 64.65-18.11l77.41 77.42a16 16 0 0022.63 0l22.62-22.62a16 16 0 000-22.63zM448 384a64 64 0 1164-64 64 64 0 01-64 64z"
      className="file-search_svg__fa-primary"
    />
  </svg>
);

SvgFileSearch.displayName = "SvgFileSearch";
SvgFileSearch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileSearch;
