import * as React from "react";

const SvgWhistle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M634 326.36l-150-120a16.16 16.16 0 00-18.2-1.2l-27.4 16.21a8 8 0 01-9.1-.6l-25.2-20.21a8 8 0 01-2.6-8.9l10.2-29.51a16 16 0 00-5.1-17.7L320 80.8c-62.6-40.1-141.7-42.9-207-9.3C100.9 56.9 83.2 48 64 48a64.06 64.06 0 00-64 64 63.27 63.27 0 0023 49c-40.1 78.24-27.5 176.56 38 242 89.8 89.82 251.11 81.42 326.51-32l150.41 86a15.93 15.93 0 0020.7-4.3l78.2-104.33a16 16 0 00-2.82-22.01zM40.4 133.22A31.86 31.86 0 0185.5 88.3c-17.8 13.01-29.9 24.32-45.1 44.92zM208 352a96 96 0 1196-96 96 96 0 01-96 96z"
      opacity={0.4}
    />
    <path
      d="M208 160a96 96 0 1096 96 96 96 0 00-96-96zm0 144a48 48 0 1148-48 48 48 0 01-48 48z"
      className="whistle_svg__fa-primary"
    />
  </svg>
);

SvgWhistle.displayName = "SvgWhistle";
SvgWhistle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWhistle;
