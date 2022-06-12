import * as React from "react";

const SvgDryer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M216 272c0-22.64-11.95-34.59-20.69-43.33-5.83-5.82-9.24-9.45-10.61-14.62A8 8 0 00177 208h-16.29a8.17 8.17 0 00-8 9.53c2.77 16.64 12.51 26.38 19.93 33.8C180.53 259.17 184 263 184 272s-3.47 12.86-11.31 20.7C164 301.47 152 313.42 152 336.06s11.95 34.57 20.69 43.28c5.82 5.82 9.23 9.44 10.6 14.59A8 8 0 00191 400h16.32a8.15 8.15 0 007.94-9.53c-2.76-16.61-12.5-26.35-19.92-33.75C187.47 348.88 184 345 184 336.06s3.47-12.86 11.31-20.7C204.05 306.63 216 294.67 216 272zm48 64c0-9 3.47-12.86 11.31-20.7 8.74-8.67 20.69-20.63 20.69-43.3s-11.95-34.59-20.69-43.33c-5.83-5.82-9.24-9.45-10.61-14.62A8 8 0 00257 208h-16.29a8.17 8.17 0 00-8 9.53c2.77 16.64 12.51 26.38 19.93 33.8C260.53 259.17 264 263 264 272s-3.47 12.86-11.31 20.7C244 301.47 232 313.42 232 336.06s11.95 34.57 20.69 43.28c5.82 5.82 9.23 9.44 10.6 14.59A8 8 0 00271 400h16.32a8.15 8.15 0 007.94-9.53c-2.76-16.61-12.5-26.35-19.92-33.75C267.47 348.88 264 345 264 336.06z"
      opacity={0.4}
    />
    <path
      d="M384 0H64A64 64 0 000 64v416a32 32 0 0032 32h384a32 32 0 0032-32V64a64 64 0 00-64-64zM184 64a24 24 0 11-24 24 24 24 0 0124-24zM64 88a24 24 0 1124 24 24 24 0 01-24-24zm160 360a144 144 0 11144-144 144 144 0 01-144 144z"
      className="dryer_svg__fa-primary"
    />
  </svg>
);

SvgDryer.displayName = "SvgDryer";
SvgDryer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDryer;
