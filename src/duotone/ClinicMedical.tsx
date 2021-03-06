import * as React from "react";

const SvgClinicMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M288 115L69.48 307.72c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0016 16H496a16 16 0 0016-16V311.11c-1.7-1.16-3.72-1.82-5.26-3.2zm96 261a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-48a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-48a8 8 0 018-8h56v-56a8 8 0 018-8h48a8 8 0 018 8v56h56a8 8 0 018 8z"
      opacity={0.4}
    />
    <path
      d="M570.7 236.29l-255.94-226a39.85 39.85 0 00-53.45 0l-256 226a16 16 0 00-1.21 22.59l21.41 23.82a16 16 0 0022.59 1.21L277.43 81.64a16 16 0 0121.17 0l229.32 202.27a16 16 0 0022.6-1.2l21.4-23.82a16 16 0 00-1.22-22.6zM376 320h-56v-56a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v48a8 8 0 008 8h56v56a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8z"
      className="clinic-medical_svg__fa-primary"
    />
  </svg>
);

SvgClinicMedical.displayName = "SvgClinicMedical";
SvgClinicMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClinicMedical;
