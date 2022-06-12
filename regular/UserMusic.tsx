import * as React from "react";

const SvgUserMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M598.36 97.51l-112 35.38A32 32 0 00464 163.36v203.12c-18.16-9.07-40.16-14.48-64-14.48-61.86 0-112 35.82-112 80s50.14 80 112 80 112-35.82 112-80V291.36L617.64 258A32 32 0 00640 227.48V128a32 32 0 00-41.64-30.49zM400 464c-39.7 0-64-20.72-64-32s24.3-32 64-32 64 20.72 64 32-24.3 32-64 32zm192-248.25L512 241v-65.88l80-25.26zM262.46 464H48v-25.59A86.56 86.56 0 01134.41 352c14.59 0 38.28 16 89.59 16 32.8 0 54.08-6.42 69.05-11.13 21.76-18.79 51.57-31.47 85.83-35.26-19.41-10.88-41.46-17.61-65.29-17.61-28.68 0-42.5 16-89.59 16s-60.81-16-89.59-16A134.43 134.43 0 000 438.41V464a48 48 0 0048 48h250.42a107.94 107.94 0 01-35.96-48zM224 288A144 144 0 1080 144a144 144 0 00144 144zm0-240a96 96 0 11-96 96 96.14 96.14 0 0196-96z" />
  </svg>
);

SvgUserMusic.displayName = "SvgUserMusic";
SvgUserMusic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserMusic;
