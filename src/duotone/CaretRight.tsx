import * as React from "react";

const SvgCaretRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 192 512" {...props}>
    <path
      d="M184 256a19.41 19.41 0 01-5.29 13.37l-.8.8L43.64 399.08C30.49 411.71 8 402.76 8 384.91V256z"
      opacity={0.4}
    />
    <path
      d="M8 256V127.07c0-17.85 22.48-26.8 35.63-14.17L177.9 241.82c.27.26.54.53.8.81A19.39 19.39 0 01184 256z"
      className="caret-right_svg__fa-primary"
    />
  </svg>
);

SvgCaretRight.displayName = "SvgCaretRight";
SvgCaretRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretRight;
