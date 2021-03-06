import * as React from "react";

const SvgEclipse = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M295.2 377.2c-44.2 14.3-94.6 4.4-129.7-30.7a128.13 128.13 0 010-181c35.1-35.1 85.5-45 129.8-30.7a203.26 203.26 0 0125.1-28.9L271.5 9.6a17.31 17.31 0 00-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 000 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7a17.31 17.31 0 0031 0l47.3-94.7 5.3 1.8a205.94 205.94 0 01-28.8-32.3zM256 160a96 96 0 1022.3 189.1 205.49 205.49 0 010-186.2A96.63 96.63 0 00256 160z"
      opacity={0.4}
    />
    <path
      d="M640 256A176 176 0 11464 80a176 176 0 01176 176z"
      className="eclipse_svg__fa-primary"
    />
  </svg>
);

SvgEclipse.displayName = "SvgEclipse";
SvgEclipse.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEclipse;
