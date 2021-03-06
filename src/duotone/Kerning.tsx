import * as React from "react";

const SvgKerning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M416.54 0h-17A8 8 0 00392 5.32l-176.28 496a8 8 0 007.55 10.68h17a8 8 0 007.54-5.32l176.28-496A8 8 0 00416.54 0z"
      opacity={0.4}
    />
    <path
      d="M304 96h-50.62a16 16 0 00-15.16 10.89L160 306.68 81.78 106.89A16 16 0 0066.62 96H16A16 16 0 00.85 117.11l105.27 277.2a32 32 0 0030.3 21.69h47.16a32 32 0 0030.3-21.69l105.27-277.2A16 16 0 00304 96zm335.15 298.89l-105.27-277.2A32 32 0 00503.58 96h-47.16a32 32 0 00-30.3 21.69l-105.27 277.2A16 16 0 00336 416h50.61a16 16 0 0015.16-10.89L416.31 368h127.38l14.53 37.11A16 16 0 00573.38 416H624a16 16 0 0015.15-21.11zM447.63 288L480 205.32 512.37 288z"
      className="kerning_svg__fa-primary"
    />
  </svg>
);

SvgKerning.displayName = "SvgKerning";
SvgKerning.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKerning;
