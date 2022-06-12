import * as React from "react";

const SvgFilm = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M356 280H156a12 12 0 00-12 12v96a12 12 0 0012 12h200a12 12 0 0012-12v-96a12 12 0 00-12-12zm0-168H156a12 12 0 00-12 12v96a12 12 0 0012 12h200a12 12 0 0012-12v-96a12 12 0 00-12-12z"
      opacity={0.4}
    />
    <path
      d="M488 64h-8v20a12 12 0 01-12 12h-40a12 12 0 01-12-12V64H96v20a12 12 0 01-12 12H44a12 12 0 01-12-12V64h-8A23.94 23.94 0 000 88v336a23.94 23.94 0 0024 24h8v-20a12 12 0 0112-12h40a12 12 0 0112 12v20h320v-20a12 12 0 0112-12h40a12 12 0 0112 12v20h8a23.94 23.94 0 0024-24V88a23.94 23.94 0 00-24-24zM96 372a12 12 0 01-12 12H44a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12H44a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12H44a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm272 208a12 12 0 01-12 12H156a12 12 0 01-12-12v-96a12 12 0 0112-12h200a12 12 0 0112 12zm0-168a12 12 0 01-12 12H156a12 12 0 01-12-12v-96a12 12 0 0112-12h200a12 12 0 0112 12zm112 152a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12zm0-96a12 12 0 01-12 12h-40a12 12 0 01-12-12v-40a12 12 0 0112-12h40a12 12 0 0112 12z"
      className="film_svg__fa-primary"
    />
  </svg>
);

SvgFilm.displayName = "SvgFilm";
SvgFilm.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilm;