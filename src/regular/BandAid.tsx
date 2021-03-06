import * as React from "react";

const SvgBandAid = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M552 96H88c-48.5 0-88 39.5-88 88v144c0 48.5 39.5 88 88 88h464c48.5 0 88-39.5 88-88V184c0-48.5-39.5-88-88-88zM88 368c-22.1 0-40-17.9-40-40V184c0-22.1 17.9-40 40-40h104v224H88zm184-88c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm-24-72c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm96 96c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm24-72c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm224 96c0 22.1-17.9 40-40 40H448V144h104c22.1 0 40 17.9 40 40v144z" />
  </svg>
);

SvgBandAid.displayName = "SvgBandAid";
SvgBandAid.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBandAid;
