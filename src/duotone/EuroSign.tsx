import * as React from "react";

const SvgEuroSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path
      d="M249.46 272H12a12 12 0 00-12 12v28.37a12 12 0 0012 12h231.08a12 12 0 0011.71-9.37l6.37-28.37a12.16 12.16 0 00.29-2.62A12 12 0 00249.46 272zm19-96H12a12 12 0 00-12 12v29.76a12 12 0 0012 12h250a12 12 0 0011.67-9.44l6.51-29.75a12.26 12.26 0 00.28-2.57 12 12 0 00-12-12z"
      opacity={0.4}
    />
    <path
      d="M310.74 472.22a249.39 249.39 0 01-61.1 7.79c-287.91 0-290.74-448 0-448a290.17 290.17 0 0152.68 5.21 12 12 0 019.53 14c-.06.29-.12.58-.2.87l-12 44.37a12 12 0 01-14 8.62c-234.25-48.79-225.48 354 10.63 299.3a12 12 0 0114.36 9c0 .11.05.22.07.33l8.81 44.49a12 12 0 01-8.78 14.02z"
      className="euro-sign_svg__fa-primary"
    />
  </svg>
);

SvgEuroSign.displayName = "SvgEuroSign";
SvgEuroSign.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEuroSign;
