import * as React from "react";

const SvgTape = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M624 432H362.3c52.1-41 85.7-104.5 85.7-176 0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h400c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-400 0c-97 0-176-79-176-176S127 80 224 80s176 79 176 176-79 176-176 176zm0-272c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" />
  </svg>
);

SvgTape.displayName = "SvgTape";
SvgTape.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTape;
