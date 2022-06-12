import * as React from "react";

const SvgMarsStrokeH = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 512" {...props}>
    <path d="M476.5 247.5l-44.6-44.6c-7.6-7.6-20.5-2.2-20.5 8.5V232H376v-20c0-6.6-5.4-12-12-12h-24c-6.6 0-12 5.4-12 12v20h-42c-4.8-28.5-18.2-55.8-40.2-77.8C189.6 98 98.4 98 42.2 154.2c-56.2 56.2-56.2 147.4 0 203.6 56.2 56.2 147.4 56.2 203.6 0 22-22 35.4-49.3 40.2-77.8h42v20c0 6.6 5.4 12 12 12h24c6.6 0 12-5.4 12-12v-20h35.4v20.6c0 10.7 12.9 16 20.5 8.5l44.6-44.6c4.7-4.7 4.7-12.3 0-17zm-264.6 76.4c-37.4 37.4-98.3 37.4-135.8 0-37.4-37.4-37.4-98.3 0-135.8 37.4-37.4 98.3-37.4 135.8 0 37.4 37.4 37.4 98.4 0 135.8z" />
  </svg>
);

SvgMarsStrokeH.displayName = "SvgMarsStrokeH";
SvgMarsStrokeH.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMarsStrokeH;