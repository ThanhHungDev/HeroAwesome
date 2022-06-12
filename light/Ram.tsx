import * as React from "react";

const SvgRam = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M496 96c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm117.31 11.61L576 89.27V80c0-26.47-21.53-48-48-48h-83.92C421.67 12.19 392.6 0 360.94 0c-55.25 0-100.16 43.04-104.16 97.29-13.17-1.89-26.9.05-38.37 6.79-18.31-10.89-43.09-10.45-61.16 1-12.28-6.66-26.56-8.7-40.88-5.67-17.03 3.84-31.41 14.97-39.62 30.16-16.94.88-33.06 9.11-44.12 23.12-10.81 13.95-15.06 31.86-12.12 48.95C7.62 213.09 0 229.81 0 247.69c0 17.91 7.5 34.59 20.19 46-3.06 17.3 1.25 35.27 12.12 48.98 10.78 14.02 26.78 22.3 43.78 23.16 4.83 9.1 11.99 16.48 20.41 21.98.14 3.96.33 7.93 1.26 11.81l21.12 87.86C122.34 501.86 135.21 512 150 512h57.53c20.95 0 36.12-19.76 31.02-39.86l-20.29-80.07a57.854 57.854 0 0029.3 7.93c10.62 0 20.88-2.84 29.91-8.17 9.16 5.31 20.62 8.56 31.84 8.02 3.67-.12 7.17-1 10.69-1.77V480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V356.83c5.69-3.63 11.01-7.98 15.38-13.51 10.81-13.95 15.06-31.86 12.12-48.95 12.88-11.45 20.5-28.17 20.5-46.05 0-8.54-1.81-16.77-4.97-24.31h92.63c14.91 0 28.81-8.03 36.28-21.02 17.97-31.55 20.06-45.08 20.06-52.52 0-18.35-10.22-34.77-26.69-42.86zM150 480l-19.82-82.44c9.14-.19 18.15-2.34 26.38-6.72 9.03 5.79 19.79 8.77 30.64 8.92L207.53 480H150zm266 0h-64v-84.09c8.85 2.29 18.22 2.72 27.62.68 15.13-3.41 27.89-12.78 36.38-25.42V480zm176.16-292.92c-1.75 3.08-4.94 4.92-8.5 4.92H444.55c-.06 3.56-.52 7.18-1.95 10.81l-5.16 13.02 12.22 6.84c18.61 10.44 19.64 40.06-.31 51.28l-12.22 6.84 5.16 13.02c8.51 21.38-9.05 44.04-30.59 40.3l-14.16-2.52-4.03 13.78c-5.48 18.83-28.59 28.04-44.84 13.67l-11.44-10.14-10.66 10.95c-8.68 8.94-25.64 12.3-38.12.45l-11.06-10.53-11.03 10.58c-10.31 9.92-27.25 9.91-37.16.16l-11.06-10.92-11.22 10.77c-10.59 10.09-28.12 9.72-38-.47l-10.44-10.83-11.44 9.77c-17.44 14.83-39.91 4.28-45.06-13.95L98 330.92l-14.25 2.56c-21.2 3.8-38.89-18.69-30.34-40.3l5.16-13.02-12.22-6.84c-18.61-10.44-19.64-40.06.31-51.28l12.22-6.84-5.16-13.02c-8.56-21.51 9.19-44.04 30.59-40.3l14.16 2.52 4.03-13.78c5.54-19.02 28.75-27.9 44.84-13.67l11.44 10.14 10.66-10.95c9.91-10.23 27.62-10.58 37.56-.69l11.09 10.97 11.25-10.77c8.42-8.09 21.16-9.19 31.28-4.01 11.35 34.96 43.84 60.46 82.54 60.46 39.98 0 72.5-32.39 72.84-72.3v-1.33c-.34-28.95-20.7-53.18-47.9-59.32-.12-.03-2.69-.6-4.26-.84-4.99-.78-9.59 2.87-9.59 7.92V82.5c0 3.68 2.5 6.94 6.1 7.69.04.01.07 0 .11 0 .01 0 0 .04.01.05 13.44 2.76 23.59 14.69 23.59 28.95 0 22.56-18.34 40.92-40.91 40.92-30.41 0-55.16-24.75-55.16-55.16C288 64.72 320.72 32 360.94 32c27.84 0 53.29 12.34 70.88 32H528c8.81 0 16 7.17 16 16v29.17l55.19 27.16c5.44 2.67 8.81 8.09 8.81 14.14 0 3.28-3.34 14.7-15.84 36.61z" />
  </svg>
);

SvgRam.displayName = "SvgRam";
SvgRam.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRam;
