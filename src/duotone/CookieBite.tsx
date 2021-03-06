import * as React from "react";

const SvgCookieBite = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M510.52 255.81A127.93 127.93 0 01384.05 128 127.92 127.92 0 01256.19 1.51a132 132 0 00-79.72 12.81l-69.13 35.22a132.32 132.32 0 00-57.79 57.81l-35.1 68.88a132.64 132.64 0 00-12.82 81l12.08 76.27a132.56 132.56 0 0037.16 73l54.77 54.76a132.1 132.1 0 0072.71 37.06l76.71 12.15a131.92 131.92 0 0080.53-12.76l69.13-35.21a132.32 132.32 0 0057.79-57.81l35.1-68.88a132.59 132.59 0 0012.91-80zM176 368a32 32 0 1132-32 32 32 0 01-32 32zm32-160a32 32 0 1132-32 32 32 0 01-32 32zm160 128a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M368 272a32 32 0 1032 32 32 32 0 00-32-32zM208 144a32 32 0 1032 32 32 32 0 00-32-32zm-32 160a32 32 0 1032 32 32 32 0 00-32-32z"
      className="cookie-bite_svg__fa-primary"
    />
  </svg>
);

SvgCookieBite.displayName = "SvgCookieBite";
SvgCookieBite.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCookieBite;
