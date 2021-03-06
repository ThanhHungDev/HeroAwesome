import * as React from "react";

const SvgAlbumCollection = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 104a24 24 0 00-24-24H40a24 24 0 00-24 24v24h480zm-16-80a24 24 0 00-24-24H56a24 24 0 00-24 24v24h448zM256 325.65c-16.63 0-30 9.93-29.86 22.09s13.5 21.72 29.86 21.72 29.73-9.68 29.87-21.72-13.23-22.09-29.87-22.09zM480 160H32A32 32 0 00.13 194.9l26.19 288A32 32 0 0058.18 512h395.64a32 32 0 0031.86-29.1l26.19-288A32 32 0 00480 160zM256 472.89c-94.26 0-174.39-54.53-179.21-125.15C71.71 273.1 151.82 209.4 256 209.4s184.29 63.7 179.21 138.34c-4.82 70.63-84.95 125.15-179.21 125.15z" />
  </svg>
);

SvgAlbumCollection.displayName = "SvgAlbumCollection";
SvgAlbumCollection.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlbumCollection;
