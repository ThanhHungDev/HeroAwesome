import * as React from "react";

const SvgWifi1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M634.9 154.9C457.7-9 182.2-8.9 5.1 154.9c-6.4 6-6.8 16-.9 22.5.2.2.3.4.5.5l34.2 34c6.2 6.1 16 6.2 22.4.4 145.9-133.7 371.3-133.7 517.2 0 6.4 5.9 16.2 5.7 22.4-.4l34.2-34c6.3-6.2 6.3-16.2.2-22.5 0-.2-.2-.4-.4-.5zM522.7 268.4c-115.3-101.9-290.2-101.8-405.3 0-6.5 5.8-7.1 15.8-1.4 22.3.3.3.5.6.8.8l34.4 34c6 5.9 15.6 6.3 22.1.8 83.9-72.6 209.7-72.4 293.5 0 6.4 5.5 16 5.2 22-.8l34.4-34c6.2-6.1 6.4-16.1.3-22.4-.3-.2-.5-.4-.8-.7z"
      opacity={0.4}
    />
    <path
      d="M320 352c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z"
      className="wifi-1_svg__fa-primary"
    />
  </svg>
);

SvgWifi1.displayName = "SvgWifi1";
SvgWifi1.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWifi1;
