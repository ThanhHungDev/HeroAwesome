import * as React from "react";

const SvgCalendarPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 192v272a48 48 0 0048 48h352a48 48 0 0048-48V192zm328 180a12 12 0 01-12 12h-60v60a12 12 0 01-12 12h-40a12 12 0 01-12-12v-60h-60a12 12 0 01-12-12v-40a12 12 0 0112-12h60v-60a12 12 0 0112-12h40a12 12 0 0112 12v60h60a12 12 0 0112 12zm-24-244h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M316 320h-60v-60a12 12 0 00-12-12h-40a12 12 0 00-12 12v60h-60a12 12 0 00-12 12v40a12 12 0 0012 12h60v60a12 12 0 0012 12h40a12 12 0 0012-12v-60h60a12 12 0 0012-12v-40a12 12 0 00-12-12zm84-256h-48v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H160v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H48a48 48 0 00-48 48v80h448v-80a48 48 0 00-48-48z"
      className="calendar-plus_svg__fa-primary"
    />
  </svg>
);

SvgCalendarPlus.displayName = "SvgCalendarPlus";
SvgCalendarPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCalendarPlus;
