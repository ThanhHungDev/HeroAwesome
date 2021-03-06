import * as React from "react";

const SvgHatSanta = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M452.6 352H58.7l89.7-215.5A170 170 0 01435 92.1l53.1 62.7a55.94 55.94 0 00-24.2 45.3 54.08 54.08 0 00-8.2 11.4L384 192z"
      opacity={0.4}
    />
    <path
      d="M480 384H32a32 32 0 00-32 32v32a32 32 0 0032 32h448a32 32 0 0032-32v-32a32 32 0 00-32-32zm160-144c0-12.1-8.2-21.9-19.2-25.2 5.5-10.1 4.4-22.8-4.2-31.4s-21.3-9.7-31.4-4.2c-3.3-11-13.1-19.2-25.2-19.2s-21.9 8.2-25.2 19.2c-10.1-5.5-22.8-4.4-31.4 4.2s-9.7 21.3-4.2 31.4c-11 3.3-19.2 13.1-19.2 25.2s8.2 21.9 19.2 25.2c-5.5 10.1-4.4 22.8 4.2 31.4a25.45 25.45 0 0031.4 4.2c3.3 11 13.1 19.2 25.2 19.2s21.9-8.2 25.2-19.2c4 2.1 8.2 3.6 12.5 3.6a26.9 26.9 0 0018.9-7.8c8.6-8.6 9.7-21.3 4.2-31.4 11-3.3 19.2-13.1 19.2-25.2z"
      className="hat-santa_svg__fa-primary"
    />
  </svg>
);

SvgHatSanta.displayName = "SvgHatSanta";
SvgHatSanta.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHatSanta;
