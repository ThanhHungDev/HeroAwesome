import * as React from "react";

const SvgTransgenderAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 512" {...props}>
    <path d="M319 239a80 80 0 11-80-80 80 80 0 0180 80z" opacity={0.4} />
    <path
      d="M467-1h-79a12 12 0 00-8.5 20.5l16.9 16.9-80.7 80.7a144.13 144.13 0 00-153.4 0l-16.5-16.5 19.8-19.8a12 12 0 000-17l-28.3-28.3a12 12 0 00-17 0l-19.8 19.8-19-19 16.9-16.9C106.1 11.9 100.7-1 90-1H11A12 12 0 00-1 11v79a12 12 0 0020.5 8.5l16.9-16.9 19 19-19.8 19.8a12 12 0 000 17l28.3 28.3a12 12 0 0017 0l19.8-19.8 16.5 16.5A142 142 0 0095 239a144 144 0 00112 140.4V407h-36a12 12 0 00-12 12v40a12 12 0 0012 12h36v28a12 12 0 0012 12h40a12 12 0 0012-12v-28h36a12 12 0 0012-12v-40a12 12 0 00-12-12h-36v-27.6a144 144 0 0089.9-217.1l80.7-80.7 16.9 16.9A12 12 0 00479 90V11a12 12 0 00-12-12zM239 319a80 80 0 1180-80 80 80 0 01-80 80z"
      className="transgender-alt_svg__fa-primary"
    />
  </svg>
);

SvgTransgenderAlt.displayName = "SvgTransgenderAlt";
SvgTransgenderAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTransgenderAlt;
