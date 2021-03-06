import * as React from "react";

const SvgAmbulance = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M464 352a80 80 0 1080 80 80 80 0 00-80-80zm-288 0a80 80 0 1080 80 80 80 0 00-80-80zm120-224h-56V72a8 8 0 00-8-8h-48a8 8 0 00-8 8v56h-56a8 8 0 00-8 8v48a8 8 0 008 8h56v56a8 8 0 008 8h48a8 8 0 008-8v-56h56a8 8 0 008-8v-48a8 8 0 00-8-8z"
      opacity={0.4}
    />
    <path
      d="M624 352h-16V243.9a48 48 0 00-14.1-33.9L494 110.1A48 48 0 00460.1 96H416V48a48 48 0 00-48-48H48A48 48 0 000 48v320a48 48 0 0048 48h18.16C74 361.93 119.78 320 176 320s102.54 41.86 110.38 96h67.24c7.85-54.14 54.1-96 110.38-96s102 41.93 109.84 96H624a16 16 0 0016-16v-32a16 16 0 00-16-16zM304 184a8 8 0 01-8 8h-56v56a8 8 0 01-8 8h-48a8 8 0 01-8-8v-56h-56a8 8 0 01-8-8v-48a8 8 0 018-8h56V72a8 8 0 018-8h48a8 8 0 018 8v56h56a8 8 0 018 8zm256 72H416V144h44.1l99.9 99.9z"
      className="ambulance_svg__fa-primary"
    />
  </svg>
);

SvgAmbulance.displayName = "SvgAmbulance";
SvgAmbulance.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAmbulance;
