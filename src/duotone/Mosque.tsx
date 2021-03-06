import * as React from "react";

const SvgMosque = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M64 0S0 32 0 96v32h128V96c0-64-64-96-64-96zm456.08 106.19c-41.94-26.47-80.63-57.77-112-96.22L400 0l-8.12 10c-31.33 38.45-70 69.76-112 96.22-46.13 29.11-87.92 70-87.92 122.9 0 21.57 11 41.52 28.84 58.91h358.36C597 270.61 608 250.66 608 229.09c0-52.86-41.79-93.79-87.92-122.9z"
      opacity={0.4}
    />
    <path
      d="M0 480a32 32 0 0032 32h64a32 32 0 0032-32V160H0zm608-160H192a32 32 0 00-32 32v128a32 32 0 0032 32h32v-64a32 32 0 0164 0v64h64v-72c0-48 48-72 48-72s48 24 48 72v72h64v-64a32 32 0 0164 0v64h32a32 32 0 0032-32V352a32 32 0 00-32-32z"
      className="mosque_svg__fa-primary"
    />
  </svg>
);

SvgMosque.displayName = "SvgMosque";
SvgMosque.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMosque;
