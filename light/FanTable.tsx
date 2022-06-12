import * as React from "react";

const SvgFanTable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 209.42A14.58 14.58 0 10238.58 224 14.58 14.58 0 00224 209.42zM448 224C448 100.29 347.71 0 224 0S0 100.29 0 224c0 118.31 91.79 215 208 223.19V480H88a24 24 0 00-24 24 8 8 0 008 8h304a8 8 0 008-8 24 24 0 00-24-24H240v-32.81C356.21 439 448 342.31 448 224zM224 413.54c-104.51 0-189.54-85-189.54-189.54S119.49 34.46 224 34.46s189.54 85 189.54 189.54S328.51 413.54 224 413.54zm159.21-170.21a101.68 101.68 0 00-140.28-94.15L222 93.23c-8-21.36-34.11-32.76-56-20.11a101.76 101.76 0 00-37.24 139 99.86 99.86 0 0025.93 29.45l-38.1 46.28a39 39 0 0010.69 58.59 101.54 101.54 0 0050.64 13.61c28.88 0 66.61-13.37 88.27-50.9A99.43 99.43 0 00278.68 272c12.35 2 31.56 5.23 59.13 9.83 21.02 3.5 45.4-11.89 45.4-38.5zm-39.65 6.94c-1.62 0-76.85-12.91-78.95-12.91h-.19c-10 0-17.43 8.59-17 18.47a68.27 68.27 0 01-9 37.3c-19.49 33.76-54.1 34.9-59.81 34.9a69.57 69.57 0 01-35.48-9.38 7 7 0 01-1.91-10.49l49-59.48c7.82-9.5 2.77-21.62-5.83-26.06a68.35 68.35 0 01-28-26.54 69.75 69.75 0 0125.53-95.27 7 7 0 0110.08 3.64l27 72a16.94 16.94 0 0025.2 8 69.67 69.67 0 01107 58.9c.01 3.65-2.57 6.92-7.64 6.92z" />
  </svg>
);

SvgFanTable.displayName = "SvgFanTable";
SvgFanTable.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFanTable;