import * as React from "react";

const SvgCalendarStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M0 192v272a48 48 0 0048 48h352a48 48 0 0048-48V192zm324.13 141.91a11.92 11.92 0 01-3.53 6.89L281 379.4l9.4 54.6a12 12 0 01-17.4 12.6l-49-25.8-48.9 25.8a12 12 0 01-17.4-12.6l9.4-54.6-39.6-38.6a12 12 0 016.6-20.5l54.7-8 24.5-49.6a12 12 0 0121.5 0l24.5 49.6 54.7 8a12 12 0 0110.13 13.61zM304 128h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16zm-192 0h32a16 16 0 0016-16V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v96a16 16 0 0016 16z"
      opacity={0.4}
    />
    <path
      d="M314 320.3l-54.7-8-24.5-49.6a12 12 0 00-21.5 0l-24.5 49.6-54.7 8a12 12 0 00-6.6 20.5l39.6 38.6-9.4 54.6a12 12 0 0017.4 12.6l48.9-25.8 49 25.8a12 12 0 0017.4-12.6l-9.4-54.6 39.6-38.6a12 12 0 00-6.6-20.5zM400 64h-48v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H160v48a16 16 0 01-16 16h-32a16 16 0 01-16-16V64H48a48 48 0 00-48 48v80h448v-80a48 48 0 00-48-48z"
      className="calendar-star_svg__fa-primary"
    />
  </svg>
);

SvgCalendarStar.displayName = "SvgCalendarStar";
SvgCalendarStar.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCalendarStar;
