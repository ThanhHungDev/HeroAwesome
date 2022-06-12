import * as React from "react";

const SvgTriangleMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M497.81 368.09l-80.48-130.24-46.49 46.5 72.55 117.4a29 29 0 01.69 30A31.73 31.73 0 01415.87 448H96.13a31.73 31.73 0 01-28.21-16.23 29 29 0 01.69-30l159.87-258.7c8.4-13.6 22.05-15.07 27.52-15.07s19.12 1.47 27.52 15.05l44.11 71.37-53 53a56.85 56.85 0 1033.92 33.94l198.7-198.74a16 16 0 000-22.62l-11.31-11.31a16 16 0 00-22.62 0l-99.21 99.23L338 109.39c-11.72-19-29.55-32.22-50-39.34V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v54.05c-20.41 7.12-38.24 20.37-50 39.34L14.19 368.09A92.48 92.48 0 0012 462.92 96.17 96.17 0 0096.13 512h319.74A96.17 96.17 0 00500 462.92a92.48 92.48 0 00-2.19-94.83z" />
  </svg>
);

SvgTriangleMusic.displayName = "SvgTriangleMusic";
SvgTriangleMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTriangleMusic;