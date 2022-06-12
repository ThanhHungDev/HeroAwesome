import * as React from "react";

const SvgDreidel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M443.3 48L432 36.7c-6.2-6.2-16.4-6.2-22.6 0L294.7 151.4l-77.6-77.6c-6.5-6.5-15.1-9.8-23.6-9.8-8.6 0-17.1 3.3-23.6 9.8L19.6 224C7 236.5 0 253.5 0 271.3v141.8c0 37 29.9 66.9 66.9 66.9h141.8c17.7 0 34.7-7 47.3-19.6l150.2-150.2c13.1-13.1 13.1-34.2 0-47.3l-77.6-77.6L443.3 70.6c6.3-6.2 6.3-16.4 0-22.6zM222.1 426.5c-3.6 3.6-8.3 5.5-13.3 5.5H66.9c-10.4 0-18.9-8.5-18.9-18.9V271.3c0-5 2-9.8 5.5-13.3l53.2-53.2 168.5 168.5-53.1 53.2zm87.1-87.2L140.7 170.8l52.7-52.7L362 286.6l-52.8 52.7z" />
  </svg>
);

SvgDreidel.displayName = "SvgDreidel";
SvgDreidel.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDreidel;
