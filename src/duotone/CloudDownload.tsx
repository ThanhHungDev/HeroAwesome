import * as React from "react";

const SvgCloudDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M537.6 226.6A96.11 96.11 0 00448 96a95.51 95.51 0 00-53.3 16.2A160 160 0 0096 192c0 2.7.1 5.4.2 8.1A144 144 0 00144 480h368a128 128 0 0025.6-253.4zm-139.9 93L305 412.3a23.9 23.9 0 01-33.9 0l-92.7-92.7a23.9 23.9 0 010-33.9l10.8-10.8a24.09 24.09 0 0134.5.5l32.4 34.5V184a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v125.9l32.4-34.5a24 24 0 0134.5-.5l10.8 10.8a24.18 24.18 0 01-.1 33.9z"
      opacity={0.4}
    />
    <path
      d="M397.7 319.6L305 412.3a23.9 23.9 0 01-33.9 0l-92.7-92.7a23.9 23.9 0 010-33.9l10.8-10.8a24.09 24.09 0 0134.5.5l32.4 34.5V184a23.94 23.94 0 0124-24h16a23.94 23.94 0 0124 24v125.9l32.4-34.5a24 24 0 0134.5-.5l10.8 10.8a24.18 24.18 0 01-.1 33.9z"
      className="cloud-download_svg__fa-primary"
    />
  </svg>
);

SvgCloudDownload.displayName = "SvgCloudDownload";
SvgCloudDownload.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCloudDownload;
