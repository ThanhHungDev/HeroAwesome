import * as React from "react";

const SvgFileCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-70.7 158.67l-143 141.81a12 12 0 01-17 0l-82.6-83.31a12 12 0 01.07-17L99.17 300a12 12 0 0117 0l46 46.35 106-105.18a12 12 0 0117 0l28.17 28.4a12 12 0 01-.04 17.1z"
      opacity={0.4}
    />
    <path
      d="M285.17 241.3a12 12 0 00-17 0l-106 105.18-46-46.35a12 12 0 00-17 0l-28.4 28.2a12 12 0 00-.07 17l82.57 83.27a12 12 0 0017 0l143-141.81a12 12 0 000-17zM377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9z"
      className="file-check_svg__fa-primary"
    />
  </svg>
);

SvgFileCheck.displayName = "SvgFileCheck";
SvgFileCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileCheck;
