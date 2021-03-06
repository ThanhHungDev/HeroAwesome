import * as React from "react";

const SvgFieldHockey = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M628 0h-67.3a11.57 11.57 0 00-8.4 3.6L479 76.9 592 190l44.5-44.6a12.3 12.3 0 003.5-8.5V12a12 12 0 00-12-12zM480.2 320a96 96 0 1095.9 96 95.94 95.94 0 00-95.9-96z"
      opacity={0.4}
    />
    <path
      d="M0 319.2a190.68 190.68 0 0156.2-135.8 79.94 79.94 0 01113 113.1c-29.8 29.9 15.2 75.2 45.2 45.3l230.7-231 113 113.1-50.8 50.8c-99.6-19.1-187.4 68-168.1 168.5-14.9 14.8-61.3 68-147.4 68-106.2 0-191.8-86-191.8-192z"
      className="field-hockey_svg__fa-primary"
    />
  </svg>
);

SvgFieldHockey.displayName = "SvgFieldHockey";
SvgFieldHockey.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFieldHockey;
