import * as React from "react";

const SvgSnowmobile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M240 0a48 48 0 1048 48 48 48 0 00-48-48zm259.38 403.11l-7.27 4.89a48 48 0 01-26.61 8h-16.25L486 464h-54a16 16 0 00-16 16v16a16 16 0 0016 16h114.7a88.18 88.18 0 0052.8-17.6l34.1-25.6a16 16 0 003.2-22.4l-9.6-12.8a15.89 15.89 0 00-12.78-6.41 16.05 16.05 0 00-9.62 3.21L570.7 456a39.8 39.8 0 01-24 8h-.7zM288 448H32a32 32 0 000 64h256a32 32 0 000-64z"
      opacity={0.4}
    />
    <path
      d="M465.5 416a48 48 0 0026.61-8l76.79-51.2a15.94 15.94 0 007.1-13.3V266a15.94 15.94 0 00-8.8-14.3L407.9 172l-41.5-83.1a16 16 0 00-28.7 14.3l35.6 71.2L360 192h-58.7L246 136.8a64 64 0 00-102.5 16.6l-29.8 59.7a63.27 63.27 0 0013.4 75H96a31.87 31.87 0 00-28.6 17.7l-32 64C24.7 391 40.2 416 64 416zM288 288h-24.4l-67-33.5 25.6-51.1 33.9 33.9a63.66 63.66 0 0045.2 18.8H312z"
      className="snowmobile_svg__fa-primary"
    />
  </svg>
);

SvgSnowmobile.displayName = "SvgSnowmobile";
SvgSnowmobile.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSnowmobile;
