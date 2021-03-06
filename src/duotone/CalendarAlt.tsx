import * as React from "react";

const SvgCalendarAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 192v272a48 48 0 0048 48h352a48 48 0 0048-48V192zm128 244a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-128a12 12 0 01-12 12H76a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm128 128a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-128a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm128 128a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-128a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm-80-180h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M448 112v80H0v-80a48 48 0 0148-48h48v48a16 16 0 0016 16h32a16 16 0 0016-16V64h128v48a16 16 0 0016 16h32a16 16 0 0016-16V64h48a48 48 0 0148 48z"
      className="calendar-alt_svg__fa-primary"
    />
  </svg>
);

SvgCalendarAlt.displayName = "SvgCalendarAlt";
SvgCalendarAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCalendarAlt;
