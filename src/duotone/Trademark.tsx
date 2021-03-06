import * as React from "react";

const SvgTrademark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M640 403.85A12.09 12.09 0 01628 416h-53.9a12 12 0 01-12-11.2L553 271.9c-1.8-24.2 0-53.7 0-53.7h-.9s-10.7 33.6-17.9 53.7l-30.7 84.7a12 12 0 01-11.3 7.9h-50.3a12 12 0 01-11.3-7.9l-30.7-84.7c-7.2-20.1-17.9-53.7-17.9-53.7h-.9s1.8 29.5 0 53.7L372 404.8a12.09 12.09 0 01-12 11.2h-55.5a12 12 0 01-11-13l24.4-296a12.14 12.14 0 0112-11h65.4a12.06 12.06 0 0111.3 8.1l43.8 127.1c7.2 20.6 16.1 52.8 16.1 52.8h.9s8.9-32.2 16.1-52.8l43.8-127.1a12 12 0 0111.3-8.1H604a12 12 0 0112 11l24 296v.85z"
      opacity={0.4}
    />
    <path
      d="M272.5 108v43.1a12 12 0 01-12 12h-85.1V404a12 12 0 01-12 12h-54.3a12 12 0 01-12-12V163.1H12a12 12 0 01-12-12V108a12 12 0 0112-12h248.72a11.89 11.89 0 0111.78 12z"
      className="trademark_svg__fa-primary"
    />
  </svg>
);

SvgTrademark.displayName = "SvgTrademark";
SvgTrademark.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrademark;
