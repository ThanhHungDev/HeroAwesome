import * as React from "react";

const SvgCalendarCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 192v272a48 48 0 0048 48h352a48 48 0 0048-48V192zm345.26 113l-143 141.8a12 12 0 01-17 0l-82.6-83.26a12 12 0 01.06-17l.08-.08 28.4-28.17a12 12 0 0117 0l46 46.36 106-105.19a12 12 0 0117 0L345.3 288a12 12 0 01-.04 17zM304 128h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M345.33 288l-28.2-28.4a12 12 0 00-17-.1l-106 105.19-46-46.36a12 12 0 00-17-.09l-28.4 28.17a12 12 0 00-.1 17l82.6 83.26a12 12 0 0017 .1l143-141.8a12 12 0 00.1-17zM400 64h-48v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H160v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H48a48 48 0 00-48 48v80h448v-80a48 48 0 00-48-48z"
      className="calendar-check_svg__fa-primary"
    />
  </svg>
);

SvgCalendarCheck.displayName = "SvgCalendarCheck";
SvgCalendarCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCalendarCheck;
