import * as React from "react";

const SvgCalendarTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 192v272a48 48 0 0048 48h352a48 48 0 0048-48V192zm317.4 208.1a12 12 0 010 17l-28.3 28.3a12 12 0 01-17 0L224 397.3l-48.1 48.1a12 12 0 01-17 0l-28.3-28.3a12 12 0 010-17l48.1-48.1-48.1-48.1a12 12 0 010-17l28.3-28.3a12 12 0 0117 0l48.1 48.1 48.1-48.1a12 12 0 0117 0l28.3 28.3a12 12 0 010 17L269.3 352zM304 128h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M317.43 286.93l-28.3-28.3a12 12 0 00-17 0L224 306.7l-48.1-48.1a12 12 0 00-17 0l-28.3 28.3a12 12 0 000 17l48.1 48.1-48.1 48.1a12 12 0 000 17l28.3 28.3a12 12 0 0017 0l48.1-48.1 48.1 48.1a12 12 0 0017 0l28.3-28.3a12 12 0 000-17L269.3 352l48.1-48.1a12 12 0 00.03-16.97zM400 64h-48v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H160v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H48a48 48 0 00-48 48v80h448v-80a48 48 0 00-48-48z"
      className="calendar-times_svg__fa-primary"
    />
  </svg>
);

SvgCalendarTimes.displayName = "SvgCalendarTimes";
SvgCalendarTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCalendarTimes;
