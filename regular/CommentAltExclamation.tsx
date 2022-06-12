import * as React from "react";

const SvgCommentAltExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 256c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288zM284.7 96h-57.4c-10 0-17.6 9.1-15.7 18.9l18 96c1.4 7.6 8 13.1 15.7 13.1h21.4c7.7 0 14.3-5.5 15.7-13.1l18-96c1.9-9.8-5.7-18.9-15.7-18.9z" />
  </svg>
);

SvgCommentAltExclamation.displayName = "SvgCommentAltExclamation";
SvgCommentAltExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCommentAltExclamation;
