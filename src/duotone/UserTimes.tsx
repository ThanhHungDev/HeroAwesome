import * as React from "react";

const SvgUserTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M635.2 194.4L589.6 240l45.6 45.6a16.11 16.11 0 010 22.8l-22.8 22.8a16.11 16.11 0 01-22.8 0L544 285.6l-45.6 45.6a16.11 16.11 0 01-22.8 0l-22.8-22.8a16.11 16.11 0 010-22.8l45.6-45.6-45.6-45.6a16.11 16.11 0 010-22.8l22.8-22.8a16.11 16.11 0 0122.8 0l45.6 45.6 45.6-45.6a16.11 16.11 0 0122.8 0l22.8 22.8a16.11 16.11 0 010 22.8z"
      opacity={0.4}
    />
    <path
      d="M313.6 288h-16.7a174.08 174.08 0 01-145.8 0h-16.7A134.43 134.43 0 000 422.4V464a48 48 0 0048 48h352a48 48 0 0048-48v-41.6A134.43 134.43 0 00313.6 288zM224 256A128 128 0 1096 128a128 128 0 00128 128z"
      className="user-times_svg__fa-primary"
    />
  </svg>
);

SvgUserTimes.displayName = "SvgUserTimes";
SvgUserTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserTimes;
