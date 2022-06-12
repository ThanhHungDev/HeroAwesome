import * as React from "react";

const SvgStomach = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M384 320c-17.27-17.27-42.62-22.06-65.21-14.06-7.13 52.25-44.66 86.4-77.19 100.08a13.08 13.08 0 00-1.5 23.47 144.7 144.7 0 0028.73 12.61c43.37 13.59 98.26 4.59 137.7-34.41a140 140 0 0038.68-72.35c-21.54 6.03-44.96.91-61.21-15.34zM273.13 160H256a64 64 0 01-64-64V16a16 16 0 00-16-16h-32a16 16 0 00-16 16v80a128 128 0 00128 128 127.42 127.42 0 0117.13-64z"
      opacity={0.4}
    />
    <path
      d="M384 96c-17.33 0-76.15 4-110.87 64a127.56 127.56 0 00-16.5 51.31C256.07 217 256 222.1 256 224v64a64 64 0 01-64 64h-64A128 128 0 000 480v16a16 16 0 0016 16h32a16 16 0 0016-16v-16c0-37.63 34-51.21 53.92-51.21 17.11 0 29.59 6.71 41.07 18.2 63.07 63.07 129.84 65 146.71 65h2.66C420.84 512 512 420.83 512 308.35V224A128 128 0 00384 96zm64 211c0 37.73-14.65 74.2-41.48 100.72-39.44 39-94.33 48-137.7 34.41a144.7 144.7 0 01-28.73-12.61A13.08 13.08 0 01241.6 406c36.11-15.19 78.4-55.6 78.4-118v-64c.83-21.86 20.15-64 64-64a64.07 64.07 0 0164 64z"
      className="stomach_svg__fa-primary"
    />
  </svg>
);

SvgStomach.displayName = "SvgStomach";
SvgStomach.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStomach;
