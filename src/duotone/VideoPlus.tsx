import * as React from "react";

const SvgVideoPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M525.6 101.8L416 177.3v157.4l109.6 75.5c21.3 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.7zM288 232h-72v-72a16 16 0 00-16-16h-16a16 16 0 00-16 16v72H96a16 16 0 00-16 16v16a16 16 0 0016 16h72v72a16 16 0 0016 16h16a16 16 0 0016-16v-72h72a16 16 0 0016-16v-16a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M336.2 64H47.8A47.8 47.8 0 000 111.8v288.4A47.8 47.8 0 0047.8 448h288.4a47.8 47.8 0 0047.8-47.8V111.8A47.8 47.8 0 00336.2 64zM304 264a16 16 0 01-16 16h-72v72a16 16 0 01-16 16h-16a16 16 0 01-16-16v-72H96a16 16 0 01-16-16v-16a16 16 0 0116-16h72v-72a16 16 0 0116-16h16a16 16 0 0116 16v72h72a16 16 0 0116 16z"
      className="video-plus_svg__fa-primary"
    />
  </svg>
);

SvgVideoPlus.displayName = "SvgVideoPlus";
SvgVideoPlus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVideoPlus;
