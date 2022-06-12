import * as React from "react";

const SvgOm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M339 39.37l21.6 21.56a10.43 10.43 0 0014.75 0l21.57-21.56a10.43 10.43 0 000-14.75L375.35 3.05a10.45 10.45 0 00-14.76 0L339 24.61a10.43 10.43 0 000 14.75zm115.29 27.89c-85.55 65.12-169 2.75-172.58 0a16 16 0 00-23.8 20.35c1.61 3 40.37 72.34 118.8 72.34 79.92 0 98.78-31.36 101.75-37.66a15.78 15.78 0 001.53-6.83V80a16 16 0 00-25.7-12.74z"
      opacity={0.4}
    />
    <path
      d="M224 384a64.07 64.07 0 00-64-64h-33a15.92 15.92 0 01-13.17-8.55l-16.18-32.18A16.08 16.08 0 01112 256h31.9a48 48 0 10-30.27-85.29 15.57 15.57 0 01-19.2.21l-26.11-19.64a16.32 16.32 0 01-1.12-24.93c25.11-23.74 59.86-34.71 96-28.78 43.16 7.08 79.42 40.64 89.52 83.19A112.69 112.69 0 01245 256h46.84a35.66 35.66 0 0025.38-10.5l24.25-24.25A99.9 99.9 0 01512 291.87V392c0 48.53-47.48 88-96 88-96 0-96-64-96-64v-37.88a8 8 0 0114.2-5C349.31 391.75 376.58 416 416 416c13.24 0 32-10.77 32-24V291.87a35.89 35.89 0 00-61.26-25.38l-24.25 24.25A99.26 99.26 0 01291.84 320h-21.69c11 18.9 17.81 40.58 17.81 64 0 70.58-57.43 128-128 128C41.13 512-.09 416 0 361.18c0-8.8 10.26-12.77 14.79-5.22 22.8 38 49.13 92 145.15 92A64.07 64.07 0 00224 384z"
      className="om_svg__fa-primary"
    />
  </svg>
);

SvgOm.displayName = "SvgOm";
SvgOm.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOm;