import * as React from "react";

const SvgUserAstronaut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M296 96H152c-26.5 0-48 17.9-48 40v24a96 96 0 0096 96h48a96 96 0 0096-96v-24c0-22.1-21.5-40-48-40zm-108 76l-12 36-12-36-36-12 36-12 12-36 12 36 36 12zm-12 276a16 16 0 00-16 16v48h32v-48a16 16 0 00-16-16zm96 0a16 16 0 1016 16 16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M327.6 321.4a190.68 190.68 0 01-207.2 0C52.9 328.5 0 385 0 454.4v9.6a48 48 0 0048 48h80v-64a32 32 0 0132-32h128a32 32 0 0132 32v64h80a48 48 0 0048-48v-9.6c0-69.4-52.9-125.9-120.4-133zM64 224h13.5a159.78 159.78 0 00293 0H384a16 16 0 0016-16v-96a16 16 0 00-16-16h-13.5a159.78 159.78 0 00-293 0H64a16 16 0 00-16 16v96a16 16 0 0016 16zm40-88c0-22.1 21.5-40 48-40h144c26.5 0 48 17.9 48 40v24a96 96 0 01-96 96h-48a96 96 0 01-96-96z"
      className="user-astronaut_svg__fa-primary"
    />
  </svg>
);

SvgUserAstronaut.displayName = "SvgUserAstronaut";
SvgUserAstronaut.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserAstronaut;
