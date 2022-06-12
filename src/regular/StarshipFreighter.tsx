import * as React from "react";

const SvgStarshipFreighter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M127.997 336a16 16 0 1016 16 16 16 0 00-16-16zm-31.999-96a16 16 0 1016 16 16 16 0 00-16-16zm32-96a16 16 0 1015.999 16 16 16 0 00-16-16zm426.958-7.668l-243.63-88.77A257.73 257.73 0 00224.435 32c-29.151 0-58.117 5.412-85.214 17.15C-4.095 111.223.014 256 .014 256S-4.34 400.666 139.22 462.85c27.093 11.734 56.067 17.148 85.214 17.148 25.392 0 50.85-4.328 75.381-11.945l9.084 13.056A71.933 71.933 0 00367.991 512h71.999a71.67 71.67 0 0057.2-115.285l57.766-21.047A31.998 31.998 0 00576 345.602V166.398a31.998 31.998 0 00-21.044-30.066zM224.434 431.998c-103.466 0-177.845-89.922-176.419-175.969-1.223-92.742 78.469-175.935 176.27-176.015C256.482 79.986 399.99 106.793 399.99 256a173.677 173.677 0 01-18.494 77.336l-53.544-76.955c0-.131.04-.25.04-.381a87.998 87.998 0 10-175.996 0c0 37.766 24.034 69.775 57.514 82.236l60.98 87.662c-15.391 3.612-30.795 6.1-46.057 6.1zM279.994 256a39.999 39.999 0 11-40-40 39.999 39.999 0 0140 40zM439.99 464H367.99a23.959 23.959 0 01-19.687-10.297l-79.878-114.828a87.707 87.707 0 0039.35-27.445L380.522 416h59.468a24 24 0 010 48zM528 334.402L435.791 368h-18.512a221.817 221.817 0 0028.322-80h82.387l.013-.002zm0-110.4l-.013-.002H445.59a221.319 221.319 0 00-33.481-88.629L528 177.598z" />
  </svg>
);

SvgStarshipFreighter.displayName = "SvgStarshipFreighter";
SvgStarshipFreighter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarshipFreighter;