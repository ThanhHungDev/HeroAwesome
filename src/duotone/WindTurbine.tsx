import * as React from "react";

const SvgWindTurbine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 514 512" {...props}>
    <path
      d="M350.1 480h-48.32l-5-76.66L221 314l-10.78 166H161.9a36.94 36.94 0 00-33 20.42A8 8 0 00136 512h240a8 8 0 007.15-11.58A36.93 36.93 0 00350.1 480z"
      opacity={0.4}
    />
    <path
      d="M398.69 425.79l-88.35-182.32a55.77 55.77 0 01-.73-42.79l73.28-179.07a15.8 15.8 0 00-27.5-15.07L241.27 163.21a55.74 55.74 0 01-36.47 22.4L13.32 215.94A15.81 15.81 0 000 231.89v.23a15.8 15.8 0 0014.1 15.35L203.84 268a55.77 55.77 0 0137.53 20.58l130.31 153.5a15.81 15.81 0 0020.53 3.63l.2-.12a15.8 15.8 0 006.28-19.8zM256 248a24 24 0 1124-24 24 24 0 01-24 24z"
      className="wind-turbine_svg__fa-primary"
    />
  </svg>
);

SvgWindTurbine.displayName = "SvgWindTurbine";
SvgWindTurbine.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWindTurbine;
