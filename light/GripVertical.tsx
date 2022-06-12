import * as React from "react";

const SvgGripVertical = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M104 32H24C10.78 32 0 42.77 0 56v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24V56c0-13.23-10.78-24-24-24zm-8 96H32V64h64v64zm8 64H24c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96H32v-64h64v64zm8 64H24c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96H32v-64h64v64zM296 32h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24V56c0-13.23-10.78-24-24-24zm-8 96h-64V64h64v64zm8 64h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zm8 64h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64z" />
  </svg>
);

SvgGripVertical.displayName = "SvgGripVertical";
SvgGripVertical.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGripVertical;
