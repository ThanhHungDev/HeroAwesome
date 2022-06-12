import * as React from "react";

const SvgParkingSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M633.99 471.02L36 3.51C29.1-2.01 19.03-.9 13.51 6l-10 12.49C-2.02 25.39-.9 35.46 6 40.98l598 467.51c6.9 5.52 16.96 4.4 22.49-2.49l10-12.49c5.52-6.9 4.41-16.97-2.5-22.49zM283.31 135.93l131.27 102.63c.8-4.78 1.48-9.61 1.48-14.61 0-48.54-39.48-88.02-88.02-88.02h-44.73zM490 80c3.3 0 6 2.7 6 6v216.21l48 37.53V80c0-26.5-21.5-48-48-48H150.37l61.4 48H490zM150 432c-3.3 0-6-2.7-6-6V209.79l-48-37.53V432c0 26.5 21.5 48 48 48h345.63l-61.4-48H150zm114.03-48.02c8.84 0 16-7.17 16-16v-51.83l-48.01-37.53v89.37c0 8.84 7.16 16 16 16h16.01z" />
  </svg>
);

SvgParkingSlash.displayName = "SvgParkingSlash";
SvgParkingSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgParkingSlash;
