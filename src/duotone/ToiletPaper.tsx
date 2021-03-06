import * as React from "react";

const SvgToiletPaper = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M128 0C75 0 32 86 32 192v172.07c0 41.12-9.8 62.77-31.17 126.87A16 16 0 0016 512h312.92a32 32 0 0030.36-21.88c12.83-38.48 24.71-72.4 24.71-126V192C384 86 427 0 480 0zm-16 224a16 16 0 1116-16 16 16 0 01-16 16zm64 0a16 16 0 1116-16 16 16 0 01-16 16zm64 0a16 16 0 1116-16 16 16 0 01-16 16zm64 0a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M480 0c-53 0-96 86-96 192s43 192 96 192 96-86 96-192S533 0 480 0zm0 256c-17.67 0-32-28.65-32-64s14.33-64 32-64 32 28.65 32 64-14.33 64-32 64zm-368-64a16 16 0 1016 16 16 16 0 00-16-16zm64 0a16 16 0 1016 16 16 16 0 00-16-16zm64 0a16 16 0 1016 16 16 16 0 00-16-16zm64 0a16 16 0 1016 16 16 16 0 00-16-16z"
      className="toilet-paper_svg__fa-primary"
    />
  </svg>
);

SvgToiletPaper.displayName = "SvgToiletPaper";
SvgToiletPaper.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgToiletPaper;
