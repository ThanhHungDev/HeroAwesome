import * as React from "react";

const SvgTurntable = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M512 32H64A64 64 0 000 96v320a64 64 0 0064 64h448a64 64 0 0064-64V96a64 64 0 00-64-64zM224 416a160 160 0 11160-160 160 160 0 01-160 160zm288-148.18a64 64 0 01-6.76 28.63l-18.93 37.86a16 16 0 017.16 21.46l-25.69 51.38a16 16 0 01-21.47 7.16L417.69 400a16 16 0 01-7.16-21.46l25.69-51.38a16 16 0 0121.47-7.16l18.93-37.87a32 32 0 003.38-14.32V104a8 8 0 018-8h16a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M504 96h-16a8 8 0 00-8 8v163.81a32 32 0 01-3.38 14.31L457.69 320a16 16 0 00-21.47 7.16l-25.69 51.38a16 16 0 007.16 21.46l28.62 14.32a16 16 0 0021.47-7.16l25.69-51.38a16 16 0 00-7.16-21.46l18.93-37.86a64 64 0 006.76-28.64V104a8 8 0 00-8-8zm-280 0a160 160 0 10160 160A160 160 0 00224 96zm0 192a32 32 0 1132-32 32 32 0 01-32 32z"
      className="turntable_svg__fa-primary"
    />
  </svg>
);

SvgTurntable.displayName = "SvgTurntable";
SvgTurntable.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTurntable;
