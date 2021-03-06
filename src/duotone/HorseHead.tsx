import * as React from "react";

const SvgHorseHead = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M509.8 332.43l-69.9-164.3a123.55 123.55 0 00-93-79.2c18-10.6 46.3-35.9 34.2-82.3A9.29 9.29 0 00369.54.39l-.44.14-202.2 75.7C35.9 123.33 0 238.83 0 398.73v81.2a32 32 0 0032 32h236.2a32 32 0 0028.6-46.3l-40.8-81.7v-.7a127.76 127.76 0 01-104.3-69.6 7.93 7.93 0 011.6-9.3l12.1-12.1a8 8 0 0111.31.09 8.14 8.14 0 011.59 2.31A95.46 95.46 0 00265.7 352c17.2 0 33-5.1 46.8-13.2l46 63.9a31.87 31.87 0 0026 13.3h50.3a31.9 31.9 0 0022.6-9.4l45.3-39.8a32.45 32.45 0 007.1-34.37zM328 223.93a23.94 23.94 0 11.12 0z"
      opacity={0.4}
    />
    <path
      d="M178.3 294.63a8 8 0 00-12.9-2.4l-12.1 12.1a7.93 7.93 0 00-1.6 9.3 127.76 127.76 0 00104.3 69.6v.77l10.66-32h-1a95.46 95.46 0 01-87.36-57.37zm149.82-118.58a23.94 23.94 0 10-.12 47.88h.12a23.94 23.94 0 000-47.88z"
      className="horse-head_svg__fa-primary"
    />
  </svg>
);

SvgHorseHead.displayName = "SvgHorseHead";
SvgHorseHead.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHorseHead;
