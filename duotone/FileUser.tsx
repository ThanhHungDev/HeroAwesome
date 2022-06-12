import * as React from "react";

const SvgFileUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-192 64a64 64 0 11-64 64 64 64 0 0164-64zm112 236.8c0 10.61-10 19.2-22.4 19.2H102.4C90 448 80 439.4 80 428.8v-19.2c0-31.81 30.09-57.6 67.1-57.6h5a103.22 103.22 0 0079.7 0h5c37.11 0 67.2 25.79 67.2 57.6z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM192 320a64 64 0 10-64-64 64 64 0 0064 64zm44.8 32h-5a103.22 103.22 0 01-79.7 0h-5c-37 0-67.1 25.79-67.1 57.6v19.2c0 10.6 10 19.2 22.4 19.2h179.2c12.37 0 22.4-8.59 22.4-19.2v-19.2c0-31.81-30.09-57.6-67.2-57.6z"
      className="file-user_svg__fa-primary"
    />
  </svg>
);

SvgFileUser.displayName = "SvgFileUser";
SvgFileUser.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileUser;
