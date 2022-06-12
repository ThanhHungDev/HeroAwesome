import * as React from "react";

const SvgBacterium = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M511 102.93A23.76 23.76 0 00481.47 87l-18.09 5.36a110.58 110.58 0 00-46.47-44.69l4.73-18.08a23.74 23.74 0 00-46-11.91L371 35.44a110.9 110.9 0 00-22.38 1.46 380.94 380.94 0 00-42.41 9.83L301 31.91a23.74 23.74 0 00-44.75 15.85l5.21 14.59a380 380 0 00-58.15 31.22L193.85 81a23.85 23.85 0 00-33.24-4.8 23.57 23.57 0 00-4.83 33.09l9.33 12.43a380.18 380.18 0 00-46.41 46.83l-12.7-9.21a23.68 23.68 0 10-28 38.17l12.64 9.2A376.32 376.32 0 0060 265l-14.76-5.06a23.65 23.65 0 10-15.47 44.69l14.91 5.12a377.91 377.91 0 00-8.8 38.53 109.1 109.1 0 00-.94 26l-18 5.31a23.64 23.64 0 0013.51 45.31l18.12-5.36A110 110 0 0095 464.14l-4.77 18.28a23.66 23.66 0 0017 28.83 24.7 24.7 0 006 .75 23.73 23.73 0 0023-17.7l4.69-18c1.48.05 3 .37 4.47.37a110.4 110.4 0 0058.14-16.78l13 13.31a23.7 23.7 0 0034.08-32.93l-13.09-13.43a109.15 109.15 0 0017.06-42.38 155.49 155.49 0 014.75-19l12.4 5.8a23.66 23.66 0 1020.19-42.79l-12.35-5.78a158.12 158.12 0 0146.81-45.38l5.48 12.37a23.74 23.74 0 0043.48-19.08l-5.47-12.36c5.05-1.36 10-2.92 15.27-3.79a109.9 109.9 0 0045.72-19.17L444.75 248a23.69 23.69 0 1031.88-35l-14-12.63a108.75 108.75 0 0014.23-62.57l18.14-5.48a23.61 23.61 0 0016-29.39zm-90.93 78.27a63.54 63.54 0 01-41.56 25.92 208.58 208.58 0 00-171.39 171.4 64 64 0 11-126.24-21A336.53 336.53 0 01357.56 80.87a63.14 63.14 0 0110.61-.87c30.8 0 57.87 23 62.95 53.51a63.53 63.53 0 01-11.05 47.69zM160 288a32 32 0 1032 32 32 32 0 00-32-32zm80-104a24 24 0 1024 24 24 24 0 00-24-24z" />
  </svg>
);

SvgBacterium.displayName = "SvgBacterium";
SvgBacterium.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBacterium;