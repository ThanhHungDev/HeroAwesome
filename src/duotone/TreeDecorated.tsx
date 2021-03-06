import * as React from "react";

const SvgTreeDecorated = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M160 312a24 24 0 1124-24 23.94 23.94 0 01-24 24z" opacity={0.4} />
    <path
      d="M439.63 455.57L349.83 352h36c25.6 0 39.5-29.2 23.2-48.5L314.13 192h44.8c21.3 0 32.9-22.5 19.3-37.29L243.33 8.18c-10-10.9-28.6-10.9-38.6 0l-134.8 146.5c-13.6 14.79-2 37.29 19.3 37.29H134l-95 111.5c-16.3 19.3-2.4 48.5 23.2 48.5h36L8.43 455.57c-19 21.9-3.8 56.4 24.7 56.4h381.7c28.6.03 43.7-34.59 24.8-56.4zM160 312a24 24 0 1124-24 23.94 23.94 0 01-24 24zm72-152a24 24 0 1124 24 23.95 23.95 0 01-24-24zm56 280a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
      className="tree-decorated_svg__fa-primary"
    />
  </svg>
);

SvgTreeDecorated.displayName = "SvgTreeDecorated";
SvgTreeDecorated.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTreeDecorated;
