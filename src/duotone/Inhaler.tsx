import * as React from "react";

const SvgInhaler = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M32 448a32 32 0 1032 32 32 32 0 00-32-32zm96-144a32 32 0 1032 32 32 32 0 00-32-32zm-96-48a32 32 0 1032 32 32 32 0 00-32-32zm0 96a32 32 0 1032 32 32 32 0 00-32-32zm96 48a32 32 0 1032 32 32 32 0 00-32-32zM616.27 38L478.47 1.1a32 32 0 00-39.19 22.63l-15.41 57.52L592.61 250 638.9 77.21A32 32 0 00616.27 38z"
      opacity={0.4}
    />
    <path
      d="M586.15 288.78a32 32 0 018.33 30.75l-44.22 168.59a32 32 0 01-31 23.88H224a32 32 0 01-32-32V288a32 32 0 0132-32h122.49l35.91-136.92a16 16 0 0126.79-7.26z"
      className="inhaler_svg__fa-primary"
    />
  </svg>
);

SvgInhaler.displayName = "SvgInhaler";
SvgInhaler.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgInhaler;
