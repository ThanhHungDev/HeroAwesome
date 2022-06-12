import * as React from "react";

const SvgUserCowboy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M313.59 352c-28.72 0-42.43 16-89.59 16s-60.88-16-89.56-16A134.46 134.46 0 000 486.41 25.61 25.61 0 0025.59 512H422.4a25.61 25.61 0 0025.6-25.59A134.46 134.46 0 00313.59 352zM50.94 464c9.53-35.3 46.93-64 83.5-64 14.43 0 38.28 16 89.56 16 51.47 0 75.09-16 89.59-16 36.56.05 73.94 28.72 83.47 64zm45.9-280.53c-.22 2.86-.84 5.61-.84 8.53a128 128 0 00256 0c0-2.77-.6-5.36-.79-8.08 69.17-30.06 93.7-77.93 95.13-80.86a16 16 0 00-26.44-17.53c-1.92 1.87-22.55 20.59-76.16 33.61C333 69 312.09 0 278.1 0c-10.33 0-19.55 4.45-27.3 10.47a42.41 42.41 0 01-52.07 0C191 4.45 181.76 0 171.43 0c-34.08 0-55 69.38-65.73 119.54-55.17-13-75.62-31.87-76-31.87a16 16 0 00-27.89 15.71c1.49 2.89 26.85 50.09 95.03 80.09zM224 208a352.41 352.41 0 0079.25-8.57C299.43 240 265.57 272 224 272s-75.52-32.06-79.26-72.72A347.29 347.29 0 00224 208z" />
  </svg>
);

SvgUserCowboy.displayName = "SvgUserCowboy";
SvgUserCowboy.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserCowboy;
