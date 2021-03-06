import * as React from "react";

const SvgFontCase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M229.88 85.69A32 32 0 00199.58 64h-47.16a32 32 0 00-30.3 21.69L.85 426.89A16 16 0 0016 448h50.62a16 16 0 0015.16-10.89L100.85 384h150.3l19.07 53.11A16 16 0 00285.38 448H336a16 16 0 0015.16-21.11zM129.58 304L176 174.74 222.42 304zM624 160h-32a16 16 0 00-16 16v1.81c-18.9-11-40.58-17.81-64-17.81a128.14 128.14 0 00-128 128v32a128.14 128.14 0 00128 128c23.42 0 45.1-6.78 64-17.81V432a16 16 0 0016 16h32a16 16 0 0016-16V176a16 16 0 00-16-16zm-64 160a48 48 0 01-96 0v-32a48 48 0 0196 0z" />
  </svg>
);

SvgFontCase.displayName = "SvgFontCase";
SvgFontCase.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFontCase;
