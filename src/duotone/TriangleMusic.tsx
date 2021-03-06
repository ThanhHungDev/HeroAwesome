import * as React from "react";

const SvgTriangleMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M274.64 267.42a56.8 56.8 0 1033.92 33.94l198.69-198.74a16 16 0 000-22.62l-11.31-11.31a16 16 0 00-22.62 0z"
      opacity={0.4}
    />
    <path
      d="M500 462.92A96.17 96.17 0 01415.87 512H96.13A96.17 96.17 0 0112 462.92a92.48 92.48 0 012.16-94.83l159.86-258.7c11.72-19 29.55-32.22 50-39.34V16A16 16 0 01240 0h32a16 16 0 0116 16v54.05c20.41 7.12 38.24 20.37 50 39.34l36.16 58.53-46.48 46.5-44.11-71.37c-8.4-13.58-22-15.05-27.52-15.05s-19.12 1.47-27.52 15.05L68.61 401.75a29 29 0 00-.69 30A31.73 31.73 0 0096.13 448h319.74a31.73 31.73 0 0028.21-16.23 29 29 0 00-.69-30l-89.84-145.41L400 209.87l97.77 158.22a92.48 92.48 0 012.23 94.83z"
      className="triangle-music_svg__fa-primary"
    />
  </svg>
);

SvgTriangleMusic.displayName = "SvgTriangleMusic";
SvgTriangleMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTriangleMusic;
