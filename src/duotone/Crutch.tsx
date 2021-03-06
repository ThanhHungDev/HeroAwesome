import * as React from "react";

const SvgCrutch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M281 49.91a16 16 0 010-22.63l22.69-22.6a16 16 0 0122.62 0l181 181a16 16 0 01-.06 22.6l-22.62 22.63a16 16 0 01-22.63 0z"
      opacity={0.4}
    />
    <path
      d="M382.91 197l-55.1 55.12-67.89-67.92L315 129.1l-45.23-45.25L160.1 193.52a96.05 96.05 0 00-25.67 46.29l-27.74 120.26-102 102a16 16 0 000 22.63l22.62 22.62a16 16 0 0022.63 0l102-102 120.25-27.75a95.85 95.85 0 0046.29-25.65l109.68-109.68zM273.24 306.66a32 32 0 01-15.45 8.54l-79.3 18.32 18.3-79.3a32.23 32.23 0 018.56-15.45l9.31-9.31 67.89 67.89z"
      className="crutch_svg__fa-primary"
    />
  </svg>
);

SvgCrutch.displayName = "SvgCrutch";
SvgCrutch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCrutch;
