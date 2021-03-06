import * as React from "react";

const SvgLineHeight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M626.29 224H269.71c-7.57 0-13.71 7.16-13.71 16v32c0 8.84 6.14 16 13.71 16h356.58c7.57 0 13.71-7.16 13.71-16v-32c0-8.84-6.14-16-13.71-16zm0 160H269.71c-7.57 0-13.71 7.16-13.71 16v32c0 8.84 6.14 16 13.71 16h356.58c7.57 0 13.71-7.16 13.71-16v-32c0-8.84-6.14-16-13.71-16zm0-320H269.71C262.14 64 256 71.16 256 80v32c0 8.84 6.14 16 13.71 16h356.58c7.57 0 13.71-7.16 13.71-16V80c0-8.84-6.14-16-13.71-16z"
      opacity={0.4}
    />
    <path
      d="M176 144c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 00-22.62 0l-80 80C-4.64 126 .36 144 16 144h48v224H16c-14.29 0-21.31 17.31-11.29 27.31l80 80a16 16 0 0022.62 0l80-80C196.64 386 191.64 368 176 368h-48V144z"
      className="line-height_svg__fa-primary"
    />
  </svg>
);

SvgLineHeight.displayName = "SvgLineHeight";
SvgLineHeight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLineHeight;
