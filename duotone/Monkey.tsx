import * as React from "react";

const SvgMonkey = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M549.47 267.22A127 127 0 01480 288c-56.67 0-104.29-37.26-121.08-88.38C262.91 224.9 192 312.05 192 416v32a32 32 0 01-32-32V176a80 80 0 00-160 0v48a32 32 0 0064 0v-48a16 16 0 0132 0v240a96.1 96.1 0 0096 96h240a16 16 0 0016-16v-16a32 32 0 00-32-32h-64l155.68-103.79 34.68 104 1.64 10.13V496a16 16 0 0016 16h32a16 16 0 0016-16v-37.61a96 96 0 00-4.94-30.39zM592 64h-21.88C556.9 26.8 521.74 0 480 0s-76.9 26.8-90.12 64H368a48 48 0 000 96h16a96 96 0 00192 0h16a48 48 0 000-96zm-32 48a48 48 0 01-32 45.26V176a48 48 0 01-48 48 48 48 0 01-48-48v-18.74A48 48 0 01400 112a48 48 0 0148-48h64a48 48 0 0148 48z"
      opacity={0.4}
    />
    <path
      d="M512 64h-64a48 48 0 00-48 48 48 48 0 0032 45.26V176a48 48 0 0048 48 48 48 0 0048-48v-18.74A48 48 0 00560 112a48 48 0 00-48-48zm-72 56a16 16 0 1116-16 16 16 0 01-16 16zm80 0a16 16 0 1116-16 16 16 0 01-16 16z"
      className="monkey_svg__fa-primary"
    />
  </svg>
);

SvgMonkey.displayName = "SvgMonkey";
SvgMonkey.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMonkey;