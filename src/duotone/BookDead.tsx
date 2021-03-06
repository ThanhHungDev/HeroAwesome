import * as React from "react";

const SvgBookDead = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z"
      opacity={0.4}
    />
    <path
      d="M208 136a16 16 0 10-16-16 16 16 0 0016 16zM96 384h328a24 24 0 0024-24V32a32 32 0 00-32-32H96A96 96 0 000 96v320a96 96 0 0096 96h328a24 24 0 0024-24v-16a24 24 0 00-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zM240 56c44.2 0 80 28.7 80 64 0 20.9-12.7 39.2-32 50.9V184a16 16 0 01-16 16h-64a16 16 0 01-16-16v-13.1c-19.3-11.7-32-30-32-50.9 0-35.3 35.8-64 80-64zM124.8 223.3l6.3-14.7a8 8 0 0110.5-4.2l98.3 42.1 98.4-42.1a8 8 0 0110.5 4.2l6.3 14.7a8 8 0 01-4.2 10.5L280.6 264l70.3 30.1a8 8 0 014.2 10.5l-6.3 14.7a8 8 0 01-10.5 4.2L240 281.4l-98.3 42.2a8 8 0 01-10.5-4.2l-6.3-14.7a8 8 0 014.2-10.5l70.4-30.1-70.5-30.3a8 8 0 01-4.2-10.5zM272 136a16 16 0 10-16-16 16 16 0 0016 16z"
      className="book-dead_svg__fa-primary"
    />
  </svg>
);

SvgBookDead.displayName = "SvgBookDead";
SvgBookDead.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBookDead;
