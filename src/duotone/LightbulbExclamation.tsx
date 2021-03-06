import * as React from "react";

const SvgLightbulbExclamation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 352 512" {...props}>
    <path
      d="M175.45 0C73.44.31 0 83 0 176a175 175 0 0043.56 115.78c16.52 18.85 42.36 58.22 52.21 91.45 0 .26.07.52.11.78h160.24c0-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45A175.9 175.9 0 00175.45 0zm.55 320a32 32 0 1132-32 32 32 0 01-32 32zm38.24-238.41l-12.8 128A16 16 0 01185.52 224h-19a16 16 0 01-15.92-14.41l-12.8-128A16 16 0 01153.68 64h44.64a16 16 0 0115.92 17.59z"
      opacity={0.4}
    />
    <path
      d="M176 256a32 32 0 1032 32 32 32 0 00-32-32zm-25.44-46.41A16 16 0 00166.48 224h19a16 16 0 0015.92-14.41l12.8-128A16 16 0 00198.32 64h-44.64a16 16 0 00-15.92 17.59zM96 416v38.35a32 32 0 005.42 17.65l17.09 25.69A32 32 0 00145.15 512h61.71a32 32 0 0026.64-14.28L250.59 472a32 32 0 005.41-17.65V416z"
      className="lightbulb-exclamation_svg__fa-primary"
    />
  </svg>
);

SvgLightbulbExclamation.displayName = "SvgLightbulbExclamation";
SvgLightbulbExclamation.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightbulbExclamation;
