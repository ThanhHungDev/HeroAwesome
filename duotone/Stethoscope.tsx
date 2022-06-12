import * as React from "react";

const SvgStethoscope = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M480 231.42V344c0 92.6-79 168-176 168-95.39 0-173.28-72.78-175.9-163.17h64.1c2.7 55.1 51.9 99.2 111.9 99.2 61.8 0 112-46.7 112-104V231.47c-.1.53 63.9.53 63.9-.05z"
      opacity={0.4}
    />
    <path
      d="M448 112a64 64 0 1064 64 64 64 0 00-64-64zm0 80a16 16 0 1116-16 16 16 0 01-16 16zM300.7 13.07L237.8.47a23.94 23.94 0 00-28.2 18.8L206.4 35a23.94 23.94 0 0018.8 28.2l30.7 6.1.1 122.7a96 96 0 01-192 0l-.1-72V69.37l30.7-6.1a23.94 23.94 0 0018.8-28.2l-3.1-15.7A23.94 23.94 0 0082.1.57L19.3 13A24.09 24.09 0 000 36.57V192c0 88.22 71.78 160 160 160s160-71.78 160-160V36.57a24 24 0 00-19.3-23.5z"
      className="stethoscope_svg__fa-primary"
    />
  </svg>
);

SvgStethoscope.displayName = "SvgStethoscope";
SvgStethoscope.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStethoscope;
