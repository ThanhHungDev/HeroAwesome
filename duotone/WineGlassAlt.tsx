import * as React from "react";

const SvgWineGlassAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 288 512" {...props}>
    <path
      d="M64.38 198.37L70.69 128h146.67l6.3 70.36a79.63 79.63 0 01-15.28 55.26 81 81 0 01-46.83 30.85 77.47 77.47 0 01-35 0 81 81 0 01-46.83-30.85 79.76 79.76 0 01-15.35-55.25z"
      opacity={0.4}
    />
    <path
      d="M211.63 64l12 134.36a79.63 79.63 0 01-15.28 55.26 81 81 0 01-46.83 30.85 77.47 77.47 0 01-35 0 81 81 0 01-46.82-30.85 79.76 79.76 0 01-15.29-55.26L76.42 64h135.21m44.11-64H32.31a15.85 15.85 0 00-15.7 14.55l-16 178.11A144.67 144.67 0 00112 346.82V464H72a40 40 0 00-40 40 8 8 0 008 8h208a8 8 0 008-8 40 40 0 00-40-40h-40V346.81a144.67 144.67 0 00111.39-154.16l-16-178.1A15.85 15.85 0 00255.74 0z"
      className="wine-glass-alt_svg__fa-primary"
    />
  </svg>
);

SvgWineGlassAlt.displayName = "SvgWineGlassAlt";
SvgWineGlassAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWineGlassAlt;
