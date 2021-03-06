import * as React from "react";

const SvgBoxCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M448 128c-106 0-192 86-192 192s86 192 192 192 192-86 192-192-86-192-192-192zm114.1 147.8l-131 130a11 11 0 01-15.6-.1l-75.7-76.3a11 11 0 01.1-15.6l26-25.8a11 11 0 0115.6.1l42.1 42.5 97.2-96.4a11 11 0 0115.6.1l25.8 26a11 11 0 01-.1 15.5z"
      opacity={0.4}
    />
    <path
      d="M240 0H98.6a47.87 47.87 0 00-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240zm208 80a221.93 221.93 0 0127.2 1.7l-16.3-48.8A47.83 47.83 0 00413.4 0H272v157.4C315.9 109.9 378.4 80 448 80zM208 320a238.53 238.53 0 0120.2-96H0v240a48 48 0 0048 48h256.6C246.1 468.2 208 398.6 208 320zm354.2-59.7l-25.8-26a11 11 0 00-15.6-.1l-97.2 96.4-42.1-42.5a11 11 0 00-15.6-.1l-26 25.8a11 11 0 00-.1 15.6l75.7 76.3a11 11 0 0015.6.1l131-130a11 11 0 00.1-15.5z"
      className="box-check_svg__fa-primary"
    />
  </svg>
);

SvgBoxCheck.displayName = "SvgBoxCheck";
SvgBoxCheck.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxCheck;
