import * as React from "react";

const SvgUserHeadset = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M320 352h-4.7c-12.15 0-24 2.9-35.5 6.8a173.73 173.73 0 01-111.63 0c-11.49-3.9-23.3-6.78-35.43-6.78H128A128 128 0 000 480a32 32 0 0032 32h384a32 32 0 0032-32 128 128 0 00-128-128zM49.61 464A80.14 80.14 0 01128 400h4.74c5.12 0 11.49 1.35 20 4.24a221.75 221.75 0 00142.42 0c8.6-2.91 15-4.27 20.11-4.27H320a80.14 80.14 0 0178.39 64zm5.72-240a23.36 23.36 0 0023.34-23.33V192c0-80.14 65.19-145.33 145.33-145.33S369.33 111.86 369.33 192v12.67a68.74 68.74 0 01-68.66 68.66h-23.5a38.74 38.74 0 00-37.84-30.66h-30.66a38.67 38.67 0 100 77.33h92A115.46 115.46 0 00416 204.67V192C416 86.13 329.87 0 224 0S32 86.13 32 192v8.67A23.36 23.36 0 0055.33 224zM224 128a64.07 64.07 0 0164 64 63.21 63.21 0 01-8.76 31.73c7 4.86 13.41 10.55 18.29 17.6h3.14c12.69 0 23.35-6.88 29.94-16.71 3.18-10.39 5.39-21.19 5.39-32.62a112 112 0 00-224 0c0 28.2 10.78 53.66 28 73.35a70.73 70.73 0 0128.54-42.05A63.22 63.22 0 01160 192a64.07 64.07 0 0164-64z" />
  </svg>
);

SvgUserHeadset.displayName = "SvgUserHeadset";
SvgUserHeadset.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserHeadset;