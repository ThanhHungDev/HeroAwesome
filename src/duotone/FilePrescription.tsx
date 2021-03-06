import * as React from "react";

const SvgFilePrescription = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M176 240h-48v32h48a16 16 0 000-32zm96-112a16 16 0 01-16-16V0H24A23.94 23.94 0 000 23.88V488a23.94 23.94 0 0023.88 24H360a23.94 23.94 0 0024-23.88V128zm32 304l-11.31 11.32a16 16 0 01-22.63 0L240 413.25l-30.06 30.06a16 16 0 01-22.63 0L176 432a16 16 0 010-22.63l30.06-30.06L146.74 320H128v48a16 16 0 01-16 16H96a16 16 0 01-16-16V208a16 16 0 0116-16h80a63.8 63.8 0 0130.54 119.92L240 345.38l29.9-29.9a16 16 0 0122.63 0l11.31 11.31a16 16 0 010 22.63l-29.9 29.9L304 409.38a16 16 0 010 22.62z"
      opacity={0.4}
    />
    <path
      d="M377 105L279.1 7a24 24 0 00-17-7H256v112a16 16 0 0016 16h112v-6.1a23.9 23.9 0 00-7-16.9zM273.94 379.32l29.9-29.9a16 16 0 000-22.63l-11.31-11.31a16 16 0 00-22.63 0l-29.9 29.9-33.46-33.46A63.8 63.8 0 00176 192H96a16 16 0 00-16 16v160a16 16 0 0016 16h16a16 16 0 0016-16v-48h18.74l59.32 59.31L176 409.37a16 16 0 000 22.63l11.31 11.31a16 16 0 0022.63 0L240 413.25l30.06 30.07a16 16 0 0022.63 0L304 432a16 16 0 000-22.62zM176 272h-48v-32h48a16 16 0 010 32z"
      className="file-prescription_svg__fa-primary"
    />
  </svg>
);

SvgFilePrescription.displayName = "SvgFilePrescription";
SvgFilePrescription.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFilePrescription;
