import * as React from "react";

const SvgParkingSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M496 64c8.8 0 16 7.2 16 16v266.1l32 25.2V80c0-26.5-21.5-48-48-48H144.1c-8.4 0-16.2 2.4-23.1 6.2L153.8 64zm-82.2 204.8c12.9-16.9 20.1-38.3 17.8-61.6-4.5-45.7-45.5-79.2-91.5-79.2H248c-3.3 0-5.5 2.2-6.8 5l34.3 27H344c30.9 0 56 25.1 56 56 0 12.5-4.2 23.9-11.2 33.2zM637 485.2L23 1.8C19.6-1 14.5-.5 11.8 3l-10 12.5C-1 19-.4 24 3 26.7l614 483.5c3.4 2.8 8.5 2.2 11.2-1.2l10-12.5c2.8-3.5 2.3-8.5-1.2-11.3zM264.1 383.9c4.4 0 8-3.6 8-8v-72h31.2l-63.2-49.7v121.7c0 4.4 3.6 8 8 8zm-120 64c-8.8 0-16-7.2-16-16V166l-32-25.2v291.1c0 26.5 21.5 48 48 48H496c8.4 0 16.1-2.3 23-6.1l-32.9-25.9z" />
  </svg>
);

SvgParkingSlash.displayName = "SvgParkingSlash";
SvgParkingSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgParkingSlash;
