import * as React from "react";

const SvgCloudSun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M366.8 61.89L279 91.18 237.5 8.4a15.13 15.13 0 00-27.1 0L169 91.18 81.1 61.89a15.23 15.23 0 00-19.2 19.19l29.3 87.79-82.8 41.49a15.12 15.12 0 000 27.09l82.8 41.4-29.3 87.78a15.16 15.16 0 0019.2 19.19l76.1-25.29A129 129 0 01180.8 327a110.27 110.27 0 01-36-24 112 112 0 11180.7-125.53 143.5 143.5 0 0130.7-7.5L386 81.08a15.16 15.16 0 00-19.2-19.19zM224 140a83.85 83.85 0 00-16.1 166.17 128.29 128.29 0 0125.2-11.7 144.12 144.12 0 0167.4-105A84.15 84.15 0 00224 140z"
      opacity={0.4}
    />
    <path
      d="M575.2 325.64c37.6 13 64.8 48.29 64.8 90.38a96 96 0 01-96 96H272a96 96 0 01-96-96c0-50.59 39.3-91.58 88.9-95.28-.2-2.9-.9-5.7-.9-8.7a112 112 0 01112-112c45.4 0 84.3 27.2 101.9 66A63.81 63.81 0 01576 320a53.91 53.91 0 01-.8 5.6z"
      className="cloud-sun_svg__fa-primary"
    />
  </svg>
);

SvgCloudSun.displayName = "SvgCloudSun";
SvgCloudSun.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudSun;