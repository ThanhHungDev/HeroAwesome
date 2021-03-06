import * as React from "react";

const SvgBoxingGlove = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M352 400v80a32 32 0 01-32 32H64a32 32 0 01-32-32v-80h133.3l-40.5 30.4a8.09 8.09 0 00-1.6 11.2l9.6 12.8A8 8 0 00144 456l48-36 48 36a8 8 0 0011.2-1.6l9.6-12.8a8.08 8.08 0 00-1.6-11.2L218.7 400z"
      opacity={0.4}
    />
    <path
      d="M15.8 286.7A1161.36 1161.36 0 010 95.9C0 43.1 43.3 0 96 0h192a96 96 0 0196 96v32.2c-29.1 0-67.6-5.6-96 32.5v-.5H141.2a92.8 92.8 0 01-60.5-22.3 8 8 0 00-10.9.4l-11.3 11.3a8 8 0 00.4 11.7 124.45 124.45 0 0082.3 30.8h132.5a84.28 84.28 0 00-1.6 16 80.12 80.12 0 0071.2 79.5 8 8 0 008.8-8v-16a8.17 8.17 0 00-6.9-8.1 47.9 47.9 0 01-41.1-48.4c.5-26.3 22.5-47.1 48.8-47.1H384a64.06 64.06 0 0164 64c0 13.8 2.8 61.1-37.5 101.5L352 384v16H218.7l40.5-30.4a8.09 8.09 0 001.6-11.2l-9.6-12.8A8 8 0 00240 344l-48 36-48-36a8 8 0 00-11.2 1.6l-9.6 12.8a8 8 0 001.6 11.2l40.5 30.4H32v-16z"
      className="boxing-glove_svg__fa-primary"
    />
  </svg>
);

SvgBoxingGlove.displayName = "SvgBoxingGlove";
SvgBoxingGlove.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBoxingGlove;
