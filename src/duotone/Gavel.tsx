import * as React from "react";

const SvgGavel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M442.75 182.39L329.61 295.53 290 255.93l-81 81L175 303l81-81-39.6-39.6L329.61 69.26z"
      opacity={0.4}
    />
    <path
      d="M169 297.37a31.9 31.9 0 00-45.16 0L9.35 412.12a32 32 0 000 45.25l45.17 45.26a31.91 31.91 0 0045.17 0l114.52-114.75a32 32 0 000-45.25zm7.49-109.32a23.92 23.92 0 0033.87 0L334.61 63.6a24 24 0 000-33.94L312 7a23.93 23.93 0 00-33.88 0L153.94 131.48a24 24 0 000 33.94zM504 199.36l-22.6-22.62a23.9 23.9 0 00-33.87 0L323.32 301.19a24 24 0 000 33.94l22.58 22.62a23.91 23.91 0 0033.88 0L504 233.3a24 24 0 000-33.94z"
      className="gavel_svg__fa-primary"
    />
  </svg>
);

SvgGavel.displayName = "SvgGavel";
SvgGavel.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGavel;
