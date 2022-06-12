import * as React from "react";

const SvgFax = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M288 368h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm192-167.12V77.25a32 32 0 00-9.38-22.63L425.38 9.38A32 32 0 00402.75 0H176a32 32 0 00-32 32v104.88a63.33 63.33 0 00-32-8.88H64a64 64 0 00-64 64v256a64 64 0 0064 64h48a63.44 63.44 0 0040-14.41A63.44 63.44 0 00192 512h256a64 64 0 0064-64V256a63.71 63.71 0 00-32-55.12zM128 448a16 16 0 01-16 16H64a16 16 0 01-16-16V192a16 16 0 0116-16h48a16 16 0 0116 16zm64-400h192v32a16 16 0 0016 16h32v96H192zm272 400a16 16 0 01-16 16H192a16 16 0 01-16-16V240h272a16 16 0 0116 16zM288 272h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm96 0h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 96h-32a16 16 0 00-16 16v32a16 16 0 0016 16h32a16 16 0 0016-16v-32a16 16 0 00-16-16z" />
  </svg>
);

SvgFax.displayName = "SvgFax";
SvgFax.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFax;
