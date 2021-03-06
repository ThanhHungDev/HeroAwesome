import * as React from "react";

const SvgPhoneRotary = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 240a72 72 0 1072 72 72 72 0 00-72-72zm250.18-117C436.76 65 347.38 32 256 32S75.24 65 5.82 123A16.45 16.45 0 000 135.64V192a16 16 0 0016 16h70.11a16 16 0 0014.31-8.85L128 128c39.9-17.28 83.2-24 128-24 44.77 0 88.07 6.72 128 24l27.58 71.15a16 16 0 0014.31 8.85H496a16 16 0 0016-16v-56.36a16.45 16.45 0 00-5.82-12.64z"
      opacity={0.4}
    />
    <path
      d="M475.78 376.62L370.43 192.25A64 64 0 00314.86 160H197.14a64 64 0 00-55.57 32.25L36.22 376.62A32 32 0 0032 392.5V448a32 32 0 0032 32h384a32 32 0 0032-32v-55.5a32 32 0 00-4.22-15.88zM256 384a72 72 0 1172-72 72 72 0 01-72 72z"
      className="phone-rotary_svg__fa-primary"
    />
  </svg>
);

SvgPhoneRotary.displayName = "SvgPhoneRotary";
SvgPhoneRotary.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPhoneRotary;
