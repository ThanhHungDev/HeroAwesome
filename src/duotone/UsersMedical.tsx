import * as React from "react";

const SvgUsersMedical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M512 224a128 128 0 10128 128 128 128 0 00-128-128zm64 144a5.33 5.33 0 01-5.33 5.33h-37.34v37.34A5.33 5.33 0 01528 416h-32a5.33 5.33 0 01-5.33-5.33v-37.34h-37.34A5.33 5.33 0 01448 368v-32a5.33 5.33 0 015.33-5.33h37.34v-37.34A5.33 5.33 0 01496 288h32a5.33 5.33 0 015.33 5.33v37.34h37.34A5.33 5.33 0 01576 336z"
      opacity={0.4}
    />
    <path
      d="M352 352c0-19.1 3.92-37.17 10.09-54.17A152.59 152.59 0 01320 304c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 00128 403.2V432a48 48 0 0048 48h241c-39.22-29.19-65-75.47-65-128zM96 224a64 64 0 10-64-64 64 64 0 0064 64zm77.1 50.6A63.81 63.81 0 00128 256H64a64.06 64.06 0 00-64 64v32a32 32 0 0032 32h65.9a146.64 146.64 0 0175.2-109.4zM319.88 256h.12a111.94 111.94 0 10-.12 0z"
      className="users-medical_svg__fa-primary"
    />
  </svg>
);

SvgUsersMedical.displayName = "SvgUsersMedical";
SvgUsersMedical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUsersMedical;
