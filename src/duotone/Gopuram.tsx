import * as React from "react";

const SvgGopuram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M160 224h32v-96h-32zm-32 128h32V224h-32zM96 512h32V352H96zm256-288v128h32V224zm-32-96v96h32v-96zm64 224v160h32V352z"
      opacity={0.4}
    />
    <path
      d="M496 352h-16V240a16 16 0 00-16-16h-16v-80a16 16 0 00-16-16h-16V16a16 16 0 00-32 0v16h-64V16a16 16 0 00-32 0v16h-64V16a16 16 0 00-32 0v16h-64V16a16 16 0 00-32 0v112H80a16 16 0 00-16 16v80H48a16 16 0 00-16 16v112H16a16 16 0 00-16 16v128a16 16 0 0016 16h80V352h32V224h32v-96h32v96h-32v128h-32v160h80v-80a16 16 0 0116-16h64a16 16 0 0116 16v80h80V352h-32V224h-32v-96h32v96h32v128h32v160h80a16 16 0 0016-16V368a16 16 0 00-16-16zM232 176a16 16 0 0116-16h16a16 16 0 0116 16v48h-48zm56 176h-64v-64a16 16 0 0116-16h32a16 16 0 0116 16z"
      className="gopuram_svg__fa-primary"
    />
  </svg>
);

SvgGopuram.displayName = "SvgGopuram";
SvgGopuram.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGopuram;
