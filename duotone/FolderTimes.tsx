import * as React from "react";

const SvgFolderTimes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M464 128H272l-64-64H48a48 48 0 00-48 48v288a48 48 0 0048 48h416a48 48 0 0048-48V176a48 48 0 00-48-48zM340.85 338.91a16 16 0 010 22.63l-11.31 11.31a16 16 0 01-22.63 0L256 321.94l-50.91 50.91a16 16 0 01-22.63 0l-11.31-11.31a16 16 0 010-22.63L222.06 288l-50.91-50.91a16 16 0 010-22.63l11.31-11.31a16 16 0 0122.63 0L256 254.06l50.91-50.91a16 16 0 0122.63 0l11.31 11.31a16 16 0 010 22.63L289.94 288z"
      opacity={0.4}
    />
    <path
      d="M171.15 237.09a16 16 0 010-22.63l11.31-11.31a16 16 0 0122.63 0L256 254.06l50.91-50.91a16 16 0 0122.63 0l11.31 11.31a16 16 0 010 22.63L289.94 288l50.91 50.91a16 16 0 010 22.63l-11.31 11.31a16 16 0 01-22.63 0L256 321.94l-50.91 50.91a16 16 0 01-22.63 0l-11.31-11.31a16 16 0 010-22.63L222.06 288z"
      className="folder-times_svg__fa-primary"
    />
  </svg>
);

SvgFolderTimes.displayName = "SvgFolderTimes";
SvgFolderTimes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFolderTimes;
