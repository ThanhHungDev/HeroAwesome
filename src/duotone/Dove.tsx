import * as React from "react";

const SvgDove = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M400 64a80.07 80.07 0 00-80 80.1v59.4A271.57 271.57 0 0187 41.75c-5.5-12.5-23.2-13.2-29-.9a269.8 269.8 0 00-26 115.7c0 70.8 34.1 136.9 85.1 185.9a406.94 406.94 0 0038.9 32.8l-143.9 36a16.1 16.1 0 00-9.5 24.4C20 462.55 63 508.15 155.88 512a32.09 32.09 0 0022.1-7.9l65.2-56.1H320a159.86 159.86 0 00160-159.74V128l32-64zm.05 96.1H400a11.31 11.31 0 11.05 0z"
      opacity={0.4}
    />
    <path
      d="M320 176.69v26.81a271.52 271.52 0 01-174.12-76.79c1.12-5.68 2.44-11.34 4-17A269.78 269.78 0 01206.16 5.35C215.07-4.94 231.92.51 233.85 14A271.5 271.5 0 00320 176.69z"
      className="dove_svg__fa-primary"
    />
  </svg>
);

SvgDove.displayName = "SvgDove";
SvgDove.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDove;
