import * as React from "react";

const SvgMusicSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M528 53.88v65.9l-189 59.68 45.86 35.85L528 170.1v157.15l48 37.52V32a31.95 31.95 0 00-41.62-30.5L233.05 96.66l45.87 35.86zM634 471L36 3.52A16 16 0 0013.48 6l-10 12.49A16 16 0 006 41l598 467.5a16 16 0 0022.5-2.5l10-12.5A16 16 0 00634 471zM208 363.09A109.68 109.68 0 00160 352c-53 0-96 35.81-96 80s43 80 96 80c49.37 0 89.56-31.16 94.91-71.09a38.69 38.69 0 001.06-8.63V297.37l-48-37.53zM160 464c-28.28 0-48-16.87-48-32s19.72-32 48-32 48 16.88 48 32-19.72 32-48 32z" />
  </svg>
);

SvgMusicSlash.displayName = "SvgMusicSlash";
SvgMusicSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMusicSlash;
