import * as React from "react";

const SvgGlassMartini = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M405.12 64L256 213.13 106.84 64z" opacity={0.4} />
    <path
      d="M502 57.6C523.28 36.34 508.23 0 478.18 0H33.78C3.73 0-11.32 36.34 10 57.6l214 214V464h-56a40 40 0 00-40 40 8 8 0 008 8h240a8 8 0 008-8 40 40 0 00-40-40h-56V271.64zM256 213.13L106.84 64h298.28z"
      className="glass-martini_svg__fa-primary"
    />
  </svg>
);

SvgGlassMartini.displayName = "SvgGlassMartini";
SvgGlassMartini.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlassMartini;
