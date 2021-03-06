import * as React from "react";

const SvgBookOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M576 62.75v337.84c0 16.23-13.13 29.77-30 30.66-49.47 2.6-149.52 12.1-218.7 46.92-10.65 5.36-23.28-1.94-23.28-13.49V100.81a15.37 15.37 0 017.27-13.17c67.24-41.16 176.16-52.48 231-55.59C560.64 31 576 45 576 62.75z"
      opacity={0.4}
    />
    <path
      d="M264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31 0 45 0 62.75V400.6c0 16.24 13.13 29.78 30 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63a15.05 15.05 0 00-7.25-12.99z"
      className="book-open_svg__fa-primary"
    />
  </svg>
);

SvgBookOpen.displayName = "SvgBookOpen";
SvgBookOpen.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBookOpen;
