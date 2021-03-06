import * as React from "react";

const SvgFileMedicalAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M448 488v.12A23.94 23.94 0 01424 512H87.88A23.94 23.94 0 0164 488V320h70.1l34.8 69.5a8 8 0 0014.3 0L240 275.8l22.1 44.2h89.48a16.27 16.27 0 0016.3-14 16.82 16.82 0 00.13-2 16 16 0 00-16-16H281.8l-34.7-69.5a8 8 0 00-14.3 0L176 332.2l-19.9-39.8a8.14 8.14 0 00-7.2-4.4H64V23.88A23.94 23.94 0 0188 0h232v112a16 16 0 0016 16h112z"
      opacity={0.4}
    />
    <path
      d="M441 105L343.1 7a24 24 0 00-17-7H320v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zm-89 183h-70.2l-34.7-69.5a8 8 0 00-14.3 0L176 332.2l-19.9-39.8a8.14 8.14 0 00-7.2-4.4H8a8 8 0 00-8 8v16a8 8 0 008 8h126.1l34.8 69.5a8 8 0 0014.3 0L240 275.8l22.1 44.2h89.48a16.27 16.27 0 0016.3-14 16.82 16.82 0 00.13-2A16 16 0 00352 288z"
      className="file-medical-alt_svg__fa-primary"
    />
  </svg>
);

SvgFileMedicalAlt.displayName = "SvgFileMedicalAlt";
SvgFileMedicalAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFileMedicalAlt;
