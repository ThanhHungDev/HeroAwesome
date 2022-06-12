import * as React from "react";

const SvgStoreSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M97.2 480.3a4.53 4.53 0 01-1.2-3.5V352h242.48l-40.64-32H96v-64h2.5a98.65 98.65 0 0073.24-32.59C165.67 218.43 148 202 148 202a66.31 66.31 0 01-49.5 22.09 71.51 71.51 0 01-9.41-.59c-17.18-2.3-31.5-13.2-39.29-29.8-8.71-18.61-7.5-40.79 3.29-57.9l3.58-5.72-25.36-20-5.31 8.51C-3.59 165.8 16 229.2 64 249.41V476.8c0 19.4 14.3 35.2 32 35.2h445.66l-40.6-32zM522 32l64.91 103.59a61 61 0 013.29 57.91c-7.79 16.59-22.11 27.5-39.29 29.8a73.26 73.26 0 01-9.41.61 66.35 66.35 0 01-50-22.5L467.7 175l-23.79 26.59a66.37 66.37 0 01-50 22.5 67.35 67.35 0 01-12.76-1.33l37.68 29.67a99.3 99.3 0 0048.67-29.52A99.14 99.14 0 00541.41 256h2.5v64h-39.27L576 376.2V249.41c48-20.21 67.59-83.61 38-130.82L549.09 15A32 32 0 00522 0H118a31.92 31.92 0 00-14.92 3.78L138.91 32zm115 453.32L23 1.8A7.88 7.88 0 0011.77 3l-10 12.5A7.94 7.94 0 003 26.71l614 483.52a8 8 0 0011.2-1.23l10-12.5a7.86 7.86 0 00-1.2-11.18z" />
  </svg>
);

SvgStoreSlash.displayName = "SvgStoreSlash";
SvgStoreSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStoreSlash;