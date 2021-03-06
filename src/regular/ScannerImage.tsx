import * as React from "react";

const SvgScannerImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M168 408h32a8 8 0 008-8v-32a8 8 0 00-8-8h-32a8 8 0 00-8 8v32a8 8 0 008 8zm-80 0h32a8 8 0 008-8v-32a8 8 0 00-8-8H88a8 8 0 00-8 8v32a8 8 0 008 8zm550.89-120c-2.69-21-16.51-39.19-37-46.11L26.25 32.85a15.75 15.75 0 00-5.12-.85A16 16 0 006 42.88L.85 58.07a16 16 0 0010 20.28l575.7 209.06c.34.11.5.44.81.59H48a48 48 0 00-48 48v96a48 48 0 0048 48h544a48 48 0 0048-48V288zM592 432H48v-96h544z" />
  </svg>
);

SvgScannerImage.displayName = "SvgScannerImage";
SvgScannerImage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgScannerImage;
