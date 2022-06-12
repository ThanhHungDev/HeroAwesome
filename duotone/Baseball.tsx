import * as React from "react";

const SvgBaseball = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M123 354.88L169 419c15.9-9.1 32.3-17.5 48.8-25.5L162 315.68c-12.63 13.5-25.53 26.6-39 39.2zm372-2.8a80 80 0 1079.8 80 79.87 79.87 0 00-79.8-80z"
      opacity={0.4}
    />
    <path
      d="M629.67 56.08l-23.9-33.4A53.82 53.82 0 00530 10.48l-212 156.3c-69.1 50.9-112.4 99.8-137.2 128.3l62.2 86.7c34.6-15.2 93.7-41.8 162.8-92.7l212.1-156.2c24.1-17.8 29.37-52.2 11.77-76.8zm-583.3 361.6c-19.2-24.1-36.6-9-37.4-8.4A24 24 0 005.27 443l47.9 60a23.87 23.87 0 0033.7 3.7c2.8-2.2 17.5-16.5 2.3-35.6 8.2-5.9 24.6-18.2 56.4-37.9l-43.2-60.3c-30 25.98-47 38.18-56 44.78z"
      className="baseball_svg__fa-primary"
    />
  </svg>
);

SvgBaseball.displayName = "SvgBaseball";
SvgBaseball.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBaseball;