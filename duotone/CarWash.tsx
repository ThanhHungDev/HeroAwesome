import * as React from "react";

const SvgCarWash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 464 512" {...props}>
    <path
      d="M349.33 85.33C349.33 61.77 392 0 392 0s42.67 61.77 42.67 85.33a42.67 42.67 0 01-85.34 0zM400 448h-56v32a32 32 0 0032 32h32a32 32 0 0032-32v-46.06A63.67 63.67 0 01400 448zM232 128a42.66 42.66 0 0042.67-42.65C274.67 61.76 232 0 232 0s-42.67 61.77-42.67 85.33A42.69 42.69 0 00232 128zm108.07 126.18A48 48 0 00295.5 224h-127a48 48 0 00-44.57 30.17L110.4 288h243.2zM72 128a42.66 42.66 0 0042.67-42.65C114.67 61.76 72 0 72 0S29.33 61.77 29.33 85.33A42.69 42.69 0 0072 128zm-8 320a63.67 63.67 0 01-40-14.06V480a32 32 0 0032 32h32a32 32 0 0032-32v-32z"
      opacity={0.4}
    />
    <path
      d="M424.49 292.91l-5.07-12.67-19.93-49.83a111.47 111.47 0 00-104-70.4h-127a111.45 111.45 0 00-104 70.4l-19.91 49.82-5.07 12.67A64 64 0 000 352v32a64 64 0 0064 64h336a64 64 0 0064-64v-32a64 64 0 00-39.51-59.09zm-300.56-38.73A48 48 0 01168.5 224h127a48 48 0 0144.57 30.17L353.6 288H110.4zM72 399.8c-19.2 0-32-12.76-32-31.9S52.8 336 72 336s48 28.71 48 47.85-28.8 15.95-48 15.95zm352-31.9c0 19.14-12.8 31.9-32 31.9s-48 3.19-48-15.95S372.8 336 392 336s32 12.76 32 31.9z"
      className="car-wash_svg__fa-primary"
    />
  </svg>
);

SvgCarWash.displayName = "SvgCarWash";
SvgCarWash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCarWash;
