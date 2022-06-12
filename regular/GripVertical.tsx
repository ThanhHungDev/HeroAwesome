import * as React from "react";

const SvgGripVertical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M120 0H24C10.75 0 0 10.74 0 24v96c0 13.25 10.75 24 24 24h96c13.26 0 24-10.75 24-24V24c0-13.26-10.74-24-24-24zM96 96H48V48h48v48zM296 0h-96c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.26 0 24-10.75 24-24V24c0-13.26-10.74-24-24-24zm-24 96h-48V48h48v48zM120 368H24c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.26 0 24-10.75 24-24v-96c0-13.26-10.74-24-24-24zm-24 96H48v-48h48v48zm200-96h-96c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.26 0 24-10.75 24-24v-96c0-13.26-10.74-24-24-24zm-24 96h-48v-48h48v48zM120 184H24c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.26 0 24-10.75 24-24v-96c0-13.26-10.74-24-24-24zm-24 96H48v-48h48v48zm200-96h-96c-13.25 0-24 10.74-24 24v96c0 13.25 10.75 24 24 24h96c13.26 0 24-10.75 24-24v-96c0-13.26-10.74-24-24-24zm-24 96h-48v-48h48v48z" />
  </svg>
);

SvgGripVertical.displayName = "SvgGripVertical";
SvgGripVertical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGripVertical;