import * as React from "react";

const SvgFanTable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M448 224C448 100.29 347.71 0 224 0S0 100.29 0 224c0 115.6 87.58 210.69 200 222.68V464h-88c-21.32 0-41.21 13.89-47.48 33.12C62.11 504.53 68.41 512 76.2 512h295.61c7.78 0 14.08-7.47 11.67-14.88C377.22 477.89 357.32 464 336 464h-88v-17.32C360.42 434.69 448 339.6 448 224zM224 400c-97 0-176-78.95-176-176S127 48 224 48s176 79 176 176-78.95 176-176 176zm130.06-133.69a17.49 17.49 0 0020.34-17.25 87.62 87.62 0 00-144.35-66.88l-34.43-91.94c-2.57-6.85-13-15.9-25.1-9a87.06 87.06 0 00-40.87 53.25c-8.85 33.12 2.3 86.06 55.38 104.9l-62.65 76.1c-8.76 10.6-1.81 22.47 4.77 26.26a87.71 87.71 0 00119.77-32.11 86.67 86.67 0 009.95-59.52zM224 240a16 16 0 1116-16 16 16 0 01-16 16z" />
  </svg>
);

SvgFanTable.displayName = "SvgFanTable";
SvgFanTable.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFanTable;