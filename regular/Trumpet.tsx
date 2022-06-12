import * as React from "react";

const SvgTrumpet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608 32a31.91 31.91 0 00-26.65 14.22c-.46.68-45.08 66.36-112.58 102-14.58 7.71-32 11.78-50.35 11.78H400v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16h-40v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16h-40v-16a16 16 0 00-16-16h-16a16 16 0 00-16 16v16H48a16 16 0 00-16-16H16a16 16 0 00-16 16v128a16 16 0 0016 16h16a16 16 0 0016-16h32.6A103.72 103.72 0 00168 448h240a102.13 102.13 0 00102.31-120.71c43.58 34.39 70.7 73.94 71.05 74.45A32 32 0 00608 416c10.31 0 32-7.76 32-32V64c0-10.17-7.71-32-32-32zM176 400h-8a56 56 0 010-112h8zm88 0h-40V288h40zm88 0h-40V288h40zm56 0h-8V288h8a56 56 0 010 112zm184-61.44c-22.78-25.38-57.62-58.45-100.78-81.24C469.74 246 444.58 240 418.45 240H48v-32h370.45c26.13 0 51.29-6 72.77-17.33 43.57-23 78.23-55.83 100.78-81z" />
  </svg>
);

SvgTrumpet.displayName = "SvgTrumpet";
SvgTrumpet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrumpet;