import * as React from "react";

const SvgGripHorizontal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M424 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zM264 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zM104 96H24c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96H32v-64h64v64zm328 96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zm-152-96h-80c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96h-64v-64h64v64zm-152-96H24c-13.22 0-24 10.77-24 24v80c0 13.23 10.78 24 24 24h80c13.22 0 24-10.77 24-24v-80c0-13.23-10.78-24-24-24zm-8 96H32v-64h64v64z" />
  </svg>
);

SvgGripHorizontal.displayName = "SvgGripHorizontal";
SvgGripHorizontal.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGripHorizontal;
