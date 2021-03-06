import * as React from "react";

const SvgHandPaper = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M448 168v150.36a192 192 0 01-5.1 44L416.39 475a48 48 0 01-46.73 37H172.07a48 48 0 01-38.82-19.77L7.65 319.53a40 40 0 0164.7-47.06L104 316V80a40 40 0 0139.22-40C165.64 39.58 184 58.36 184 80.79V256h8V40a40 40 0 0139.22-40C253.64-.42 272 18.36 272 40.79V256h8V79a40 40 0 0139.22-40C341.64 38.58 360 57.36 360 79.79V256h8v-87.21c0-22.43 18.36-41.21 40.78-40.78A40 40 0 01448 168z"
      opacity={0.4}
    />
  </svg>
);

SvgHandPaper.displayName = "SvgHandPaper";
SvgHandPaper.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHandPaper;
