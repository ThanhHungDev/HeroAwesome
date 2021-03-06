import * as React from "react";

const SvgCubes = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M488.6 250.2L392 214V105.52a36 36 0 00-23.4-33.7l-100-37.5a35.68 35.68 0 00-25.3 0l-100 37.5a36 36 0 00-23.4 33.7V214l-96.6 36.2A36 36 0 000 283.9V394a36 36 0 0019.9 32.2l100 50a35.86 35.86 0 0032.2 0l103.9-52 103.9 52a35.86 35.86 0 0032.2 0l100-50A36 36 0 00512 394V283.9a36 36 0 00-23.4-33.7zM238 395.18l-85 42.5v-79.09l85-38.8zm0-112l-102 41.41L34 283.2v-.6l102-38.2 102 38.2zm-84-178.46v-.6l102-38.2 102 38.2v.6l-102 41.39zm119 73.79l85-37v73.29l-85 31.9zm205 216.67l-85 42.5v-79.09l85-38.8zm0-112l-102 41.41-102-41.39v-.6l102-38.2 102 38.2z"
      opacity={0.4}
    />
    <path
      d="M153 437.68l85-42.5v-75.39l-85 38.8zm240-79.09v79.09l85-42.5v-75.39zM273 246.7l85-31.9v-73.29l-85 37z"
      className="cubes_svg__fa-primary"
    />
  </svg>
);

SvgCubes.displayName = "SvgCubes";
SvgCubes.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCubes;
