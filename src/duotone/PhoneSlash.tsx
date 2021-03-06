import * as React from "react";

const SvgPhoneSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M377.91 126.51l48-112a24.16 24.16 0 0127.5-13.9l104 24A24 24 0 01576 48a462 462 0 01-100.17 288l-76-58.76a367.76 367.76 0 0045.6-73.17l-60.6-49.6a23.94 23.94 0 01-6.92-27.96zm-109.74 254.9l-49.6-60.6a24 24 0 00-28-6.9l-112 48a24 24 0 00-13.9 27.5l24 104a24 24 0 0023.4 18.6 461.2 461.2 0 00269.7-86.9l-80-61.8c-10.9 6.5-22.1 12.69-33.6 18.1z"
      opacity={0.4}
    />
    <path
      d="M3.37 31.41L23 6.21a16.06 16.06 0 0122.5-2.8l588.3 454.7a15.85 15.85 0 012.9 22.3l-19.6 25.3a16.06 16.06 0 01-22.5 2.8L6.17 53.81a15.93 15.93 0 01-2.8-22.4z"
      className="phone-slash_svg__fa-primary"
    />
  </svg>
);

SvgPhoneSlash.displayName = "SvgPhoneSlash";
SvgPhoneSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneSlash;
