import * as React from "react";

const SvgFileUpload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M384 128H272a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm-94.82 224H224v80a16 16 0 01-16 16h-32a16 16 0 01-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36L180 229a17.06 17.06 0 0124 0l96.43 95.65c10.15 10.07 3 27.35-11.25 27.35z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM204 229a17.06 17.06 0 00-24 0l-96.45 95.64C73.41 334.71 80.54 352 94.82 352H160v80a16 16 0 0016 16h32a16 16 0 0016-16v-80h65.18c14.25 0 21.4-17.29 11.25-27.36z"
      className="file-upload_svg__fa-primary"
    />
  </svg>
);

SvgFileUpload.displayName = "SvgFileUpload";
SvgFileUpload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileUpload;
