import * as React from "react";

const SvgMusicSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M192 387.92a139 139 0 00-32-3.92c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V327.88l-64-49.46zM534.38 1.51L214.41 96a31.87 31.87 0 00-21 21.73l107.82 83.32L512 139.3v184.62a139 139 0 00-32-3.92 136.93 136.93 0 00-22.15 2.11l110.91 85.71c4.51-7.37 7.24-15.35 7.24-23.82V32a32 32 0 00-41.62-30.49z"
      opacity={0.4}
    />
    <path
      d="M633.82 458.1L45.47 3.39A16 16 0 0023 6.2L3.37 31.47a16 16 0 002.81 22.45l588.35 454.71a16 16 0 0022.47-2.81l19.63-25.27a16 16 0 00-2.81-22.45z"
      className="music-slash_svg__fa-primary"
    />
  </svg>
);

SvgMusicSlash.displayName = "SvgMusicSlash";
SvgMusicSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMusicSlash;
