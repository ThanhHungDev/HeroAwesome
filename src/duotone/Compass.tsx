import * as React from "react";

const SvgCompass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm126.14 148.05l-66 144.35a31.94 31.94 0 01-15.77 15.77l-144.37 66c-16.65 7.61-33.81-9.55-26.2-26.2l66-144.35a31.94 31.94 0 0115.77-15.77l144.34-66c16.66-7.6 33.81 9.55 26.2 26.2z"
      opacity={0.4}
    />
    <path
      d="M348 129.85l-144.34 66a31.94 31.94 0 00-15.77 15.77l-66 144.38c-7.61 16.65 9.55 33.81 26.2 26.2l144.34-66a32 32 0 0015.77-15.8l66-144.35c7.55-16.65-9.6-33.8-26.2-26.2zm-77.37 148.77a32 32 0 110-45.25 32 32 0 010 45.25z"
      className="compass_svg__fa-primary"
    />
  </svg>
);

SvgCompass.displayName = "SvgCompass";
SvgCompass.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCompass;
