import * as React from "react";

const SvgMobileAndroid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-64 452c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8z" />
  </svg>
);

SvgMobileAndroid.displayName = "SvgMobileAndroid";
SvgMobileAndroid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMobileAndroid;