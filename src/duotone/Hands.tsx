import * as React from "react";

const SvgHands = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M204.8 230.4a32 32 0 10-51.2 38.4l38.1 50.8a16 16 0 01-1.5 20.9l-12.8 12.8a15.9 15.9 0 01-23.6-1.1L64 244.4V96a32 32 0 00-64 0v218.4a48.05 48.05 0 0010.5 30l104.1 134.3a59.69 59.69 0 0110.4 21.7 15.67 15.67 0 0015.3 11.6H272a16 16 0 0016-16V384a128.2 128.2 0 00-25.6-76.8zM608 64a32 32 0 00-32 32v148.4l-89.8 107.8a16.06 16.06 0 01-23.6 1.1l-12.8-12.8a16 16 0 01-1.5-20.9l38.1-50.8a32 32 0 10-51.2-38.4l-57.6 76.8A128.2 128.2 0 00352 384v112a16 16 0 0016 16h131.7a15.76 15.76 0 0015.3-11.6 59.69 59.69 0 0110.4-21.7l104.1-134.3a48.05 48.05 0 0010.5-30V96a32 32 0 00-32-32z"
      opacity={0.4}
    />
  </svg>
);

SvgHands.displayName = "SvgHands";
SvgHands.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHands;
