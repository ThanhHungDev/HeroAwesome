import * as React from "react";

const SvgCalendarEdit = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 192v272a48 48 0 0048 48h352a48 48 0 0048-48V192zm274.43 163.57l-95 95L131.2 456a10.17 10.17 0 01-11.2-9 9.93 9.93 0 010-2.18l5.4-48.2 95-95a5.07 5.07 0 017.17 0l46.8 46.8a5.07 5.07 0 01.06 7.15zm55.67-55.67l-26 26a5.07 5.07 0 01-7.17 0l-46.8-46.8a5.07 5.07 0 010-7.17l26-26a20.22 20.22 0 0128.6 0l25.4 25.4a20.22 20.22 0 01-.03 28.57zM112 128h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16zm192 0h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M330.1 271.3l-25.4-25.4a20.22 20.22 0 00-28.6 0l-26 26a5.07 5.07 0 000 7.17l46.8 46.8a5.07 5.07 0 007.17 0l26-26a20.22 20.22 0 000-28.6zm-55.7 77.1l-46.8-46.8a5.07 5.07 0 00-7.17 0l-95 95-5.43 48.2a10.17 10.17 0 009 11.2 9.93 9.93 0 002.18 0l48.2-5.4 95-95a5.07 5.07 0 000-7.17zM400 64h-48v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H160v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H48a48 48 0 00-48 48v80h448v-80a48 48 0 00-48-48z"
      className="calendar-edit_svg__fa-primary"
    />
  </svg>
);

SvgCalendarEdit.displayName = "SvgCalendarEdit";
SvgCalendarEdit.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCalendarEdit;
