import * as React from "react";

const SvgMobileAndroidAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-64 452c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v8zm64-80c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
  </svg>
);

SvgMobileAndroidAlt.displayName = "SvgMobileAndroidAlt";
SvgMobileAndroidAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMobileAndroidAlt;
