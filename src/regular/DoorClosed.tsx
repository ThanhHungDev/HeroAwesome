import * as React from "react";

const SvgDoorClosed = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 464H512V32c0-17.67-14.33-32-32-32H160c-17.67 0-32 14.33-32 32v432H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-160 0H176V48h288v416zm-64-176c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32z" />
  </svg>
);

SvgDoorClosed.displayName = "SvgDoorClosed";
SvgDoorClosed.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDoorClosed;
