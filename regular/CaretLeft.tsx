import * as React from "react";

const SvgCaretLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 224 512" {...props}>
    <path d="M224 367.952V144.057c0-42.638-51.731-64.151-81.941-33.941l-112 111.943c-18.745 18.745-18.746 49.137 0 67.882l112 111.952C172.208 432.042 224 410.675 224 367.952zM64 256l112-112v224L64 256z" />
  </svg>
);

SvgCaretLeft.displayName = "SvgCaretLeft";
SvgCaretLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretLeft;
