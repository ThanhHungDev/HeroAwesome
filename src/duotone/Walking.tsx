import * as React from "react";

const SvgWalking = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M208 0a48 48 0 11-48 48 48 48 0 0148-48z" opacity={0.4} />
    <path
      d="M73.58 385.8a62.05 62.05 0 01-14.2 21.5l-50 50.1a32 32 0 0045.2 45.3L114 443.3a64.82 64.82 0 0014.19-21.5l13.5-33.8c-55.29-60.3-38.69-41.8-47.4-53.7zm228.9-140.7l-23.31-11.8-9.69-29.4c-14.71-44.6-55.71-75.8-102.21-75.9-36-.1-55.89 10.1-93.29 25.2a95.41 95.41 0 00-49.71 46.2L17.58 213a32.1 32.1 0 0014.19 42.9 31.56 31.56 0 0042.5-14.3L81 228a31.75 31.75 0 0116.5-15.4l26.79-10.8-15.19 60.7a64.22 64.22 0 0014.9 58.8l59.9 65.4a64.52 64.52 0 0114.89 27.7l18.31 73.3a32 32 0 1062.09-15.5l-22.19-89a64.07 64.07 0 00-14.9-27.7l-45.5-49.7 17.19-68.7 5.5 16.5a63.83 63.83 0 0031.71 37l23.29 11.8a31.56 31.56 0 0042.5-14.3 32.37 32.37 0 00-14.31-43z"
      className="walking_svg__fa-primary"
    />
  </svg>
);

SvgWalking.displayName = "SvgWalking";
SvgWalking.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWalking;