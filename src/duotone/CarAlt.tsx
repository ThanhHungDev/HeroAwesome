import * as React from "react";

const SvgCarAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 480 512" {...props}>
    <path
      d="M176.5 128h127a48 48 0 0144.57 30.17L368 208H112l19.93-49.83A48 48 0 01176.5 128zM416 384h-48v32a32 32 0 0032 32h32a32 32 0 0032-32v-48a31.28 31.28 0 00-.43-5.2A63.81 63.81 0 01416 384zm-352 0a63.81 63.81 0 01-47.57-21.2A31.28 31.28 0 0016 368v48a32 32 0 0032 32h32a32 32 0 0032-32v-32z"
      opacity={0.4}
    />
    <path
      d="M438.66 212.33l-31.17-77.93A111.47 111.47 0 00303.5 64h-127a111.47 111.47 0 00-104 70.4l-31.16 77.93A63.88 63.88 0 000 272v48a64 64 0 0064 64h352a64 64 0 0064-64v-48a63.88 63.88 0 00-41.34-59.67zm-306.73-54.16A48 48 0 01176.5 128h127a48 48 0 0144.57 30.17L368 208H112zM80 319.8c-19.2 0-32-12.76-32-31.9S60.8 256 80 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S380.8 256 400 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"
      className="car-alt_svg__fa-primary"
    />
  </svg>
);

SvgCarAlt.displayName = "SvgCarAlt";
SvgCarAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCarAlt;
