import * as React from "react";

const SvgUpload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M488 351.92H352v8a56 56 0 01-56 56h-80a56 56 0 01-56-56v-8H24a23.94 23.94 0 00-24 24v112a23.94 23.94 0 0024 24h464a23.94 23.94 0 0024-24v-112a23.94 23.94 0 00-24-24zm-120 132a20 20 0 1120-20 20.06 20.06 0 01-20 20zm64 0a20 20 0 1120-20 20.06 20.06 0 01-20 20z"
      opacity={0.4}
    />
    <path
      d="M192 359.93v-168h-87.7c-17.8 0-26.7-21.5-14.1-34.11L242.3 5.62a19.37 19.37 0 0127.3 0l152.2 152.2c12.6 12.61 3.7 34.11-14.1 34.11H320v168a23.94 23.94 0 01-24 24h-80a23.94 23.94 0 01-24-24z"
      className="upload_svg__fa-primary"
    />
  </svg>
);

SvgUpload.displayName = "SvgUpload";
SvgUpload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUpload;
