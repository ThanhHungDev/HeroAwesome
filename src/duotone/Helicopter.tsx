import * as React from "react";

const SvgHelicopter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M635.37 458.81l-22.15-22.2a16.13 16.13 0 00-22.64 0c-7.09 6.77-13.84 11.25-24.64 11.25H240a16 16 0 00-16 16V496a16 16 0 0016 16h325.94c14.88 0 35.3-.47 68.45-29.52a16.28 16.28 0 00.98-23.67zM320 128h64V64h176a16 16 0 0016-16V16a16 16 0 00-16-16H144a16 16 0 00-16 16v32a16 16 0 0016 16h176z"
      opacity={0.4}
    />
    <path
      d="M384 128H112L68.8 70.4A16 16 0 0056 64H16A16 16 0 00.49 83.88L32 192l160 64 86.4 115.2A32 32 0 00304 384h272a32 32 0 0032-32c0-123.71-100.29-224-224-224zm32 192V195.51C478.55 208.3 528 257.44 540.79 320z"
      className="helicopter_svg__fa-primary"
    />
  </svg>
);

SvgHelicopter.displayName = "SvgHelicopter";
SvgHelicopter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHelicopter;
