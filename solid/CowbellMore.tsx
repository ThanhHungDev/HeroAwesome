import * as React from "react";

const SvgCowbellMore = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M287.78 352c0-75.21 43.66-140.27 106.92-171.76l-10.41-57.89A32.06 32.06 0 00352.72 96h-15.91V48a48.05 48.05 0 00-48-48h-128a48.05 48.05 0 00-48 48v48H95.38a32 32 0 00-31.56 26.35l-63.31 352A32 32 0 0032.07 512h342c-51.95-34.42-86.29-93.26-86.29-160zm-15-256h-96V64h96zM480 192a160 160 0 10160 160 160 160 0 00-160-160zm80 168a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-16a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-16a8 8 0 018-8h56v-56a8 8 0 018-8h16a8 8 0 018 8v56h56a8 8 0 018 8z" />
  </svg>
);

SvgCowbellMore.displayName = "SvgCowbellMore";
SvgCowbellMore.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCowbellMore;