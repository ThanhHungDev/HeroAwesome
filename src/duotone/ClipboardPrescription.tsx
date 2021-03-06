import * as React from "react";

const SvgClipboardPrescription = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M336 63h-80a64 64 0 0164 64H64a64 64 0 0164-64H48a48 48 0 00-48 48v352a48 48 0 0048 48h288a48 48 0 0048-48V111a48 48 0 00-48-48zm-32 369l-11.31 11.31a16 16 0 01-22.63 0L240 413.25l-30.06 30.06a16 16 0 01-22.63 0L176 432a16 16 0 010-22.63l30.06-30.06L146.74 320H128v48a16 16 0 01-16 16H96a16 16 0 01-16-16V208a16 16 0 0116-16h80a63.8 63.8 0 0130.54 119.92L240 345.38l29.9-29.9a16 16 0 0122.63 0l11.3 11.31a16 16 0 010 22.63l-29.9 29.9L304 409.38a16 16 0 010 22.62zM192 256a16 16 0 01-16 16h-48v-32h48a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M273.93 379.32l29.9-29.9a16 16 0 000-22.63l-11.3-11.31a16 16 0 00-22.63 0l-29.9 29.9-33.46-33.46A63.8 63.8 0 00176 192H96a16 16 0 00-16 16v160a16 16 0 0016 16h16a16 16 0 0016-16v-48h18.74l59.32 59.31L176 409.37a16 16 0 000 22.63l11.31 11.31a16 16 0 0022.63 0L240 413.25l30.06 30.06a16 16 0 0022.63 0L304 432a16 16 0 000-22.62zM176 272h-48v-32h48a16 16 0 010 32zm80-209a64 64 0 00-128 0 64 64 0 00-64 64h256a64 64 0 00-64-64zm-64 24a24 24 0 1124-24 23.94 23.94 0 01-24 24z"
      className="clipboard-prescription_svg__fa-primary"
    />
  </svg>
);

SvgClipboardPrescription.displayName = "SvgClipboardPrescription";
SvgClipboardPrescription.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClipboardPrescription;
