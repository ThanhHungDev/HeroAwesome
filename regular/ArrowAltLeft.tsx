import * as React from "react";

const SvgArrowAltLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M272 431.952v-73.798h128c26.51 0 48-21.49 48-48V201.846c0-26.51-21.49-48-48-48H272V80.057c0-42.638-51.731-64.15-81.941-33.941l-176 175.943c-18.745 18.745-18.746 49.137 0 67.882l176 175.952C220.208 496.042 272 474.675 272 431.952zM48 256L224 80v121.846h176v108.308H224V432L48 256z" />
  </svg>
);

SvgArrowAltLeft.displayName = "SvgArrowAltLeft";
SvgArrowAltLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowAltLeft;
