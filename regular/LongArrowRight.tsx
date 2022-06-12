import * as React from "react";

const SvgLongArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z" />
  </svg>
);

SvgLongArrowRight.displayName = "SvgLongArrowRight";
SvgLongArrowRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLongArrowRight;
