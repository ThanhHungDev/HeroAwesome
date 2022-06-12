import * as React from "react";

const SvgToolbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M384 368a16 16 0 01-16 16h-32a16 16 0 01-16-16v-16H192v16a16 16 0 01-16 16h-32a16 16 0 01-16-16v-16H0v96a32 32 0 0032 32h448a32 32 0 0032-32v-96H384zm118.63-153.37l-45.25-45.25a32 32 0 00-22.63-9.38H77.25a32 32 0 00-22.63 9.37L9.37 214.63A32 32 0 000 237.26V320h128v-16a16 16 0 0116-16h32a16 16 0 0116 16v16h128v-16a16 16 0 0116-16h32a16 16 0 0116 16v16h128v-82.75a32 32 0 00-9.37-22.62z"
      opacity={0.4}
    />
    <path
      d="M336 32H176a48 48 0 00-48 48v80h64V96h128v64h64V80a48 48 0 00-48-48zM176 288h-32a16 16 0 00-16 16v64a16 16 0 0016 16h32a16 16 0 0016-16v-64a16 16 0 00-16-16zm192 0h-32a16 16 0 00-16 16v64a16 16 0 0016 16h32a16 16 0 0016-16v-64a16 16 0 00-16-16z"
      className="toolbox_svg__fa-primary"
    />
  </svg>
);

SvgToolbox.displayName = "SvgToolbox";
SvgToolbox.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgToolbox;
