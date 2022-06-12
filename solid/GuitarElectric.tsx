import * as React from "react";

const SvgGuitarElectric = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M511.21 39.54a48.1 48.1 0 00-37.79-38.23C450.48-3 450.66.78 366.74 54.9A32.12 32.12 0 00352 81.82v33.25L243.76 223.23a39.42 39.42 0 01-3.18-38.43l17.29-37.13a18.82 18.82 0 00-30.38-21.24l-38.31 38.28a77.44 77.44 0 00-18.24 28.84 77.63 77.63 0 01-40.52 44.37L54 273.29C-3.23 296.15-18.4 370 25.16 413.53l73.39 73.33c43.56 43.53 117.45 28.37 140.35-28.78l35.4-76.39a77.62 77.62 0 0144.41-40.49 77.68 77.68 0 0028.86-18.2l21.56-21.55a19.87 19.87 0 00-20.1-33L325.31 276a39.6 39.6 0 01-36.75-7.11L461.6 96c.82.05 1.56.35 2.4.35a48 48 0 0047.21-56.81zm-329.56 354.8l-11.31 11.31a8 8 0 01-11.31 0L106.34 353a8 8 0 010-11.32l11.31-11.31a8 8 0 0111.32 0L181.65 383a8 8 0 010 11.34zm64-64l-11.31 11.31a8 8 0 01-11.31 0L170.34 289a8 8 0 010-11.32l11.31-11.31a8 8 0 0111.32 0L245.65 319a8 8 0 010 11.34z" />
  </svg>
);

SvgGuitarElectric.displayName = "SvgGuitarElectric";
SvgGuitarElectric.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGuitarElectric;
