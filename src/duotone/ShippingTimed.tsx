import * as React from "react";

const SvgShippingTimed = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M464 352a80 80 0 1080 80 80 80 0 00-80-80zm-288 0a80 80 0 1080 80 80 80 0 00-80-80zm72-208h-24V88a8 8 0 00-8-8h-16a8 8 0 00-8 8v80a8 8 0 008 8h48a8 8 0 008-8v-16a8 8 0 00-8-8z"
      opacity={0.4}
    />
    <path
      d="M624 352h-16V243.9a48 48 0 00-14.1-33.9L494 110.1A48 48 0 00460.1 96H416V48a48 48 0 00-48-48H48A48 48 0 000 48v320a48 48 0 0048 48h18.16C74 361.93 119.78 320 176 320s102.54 41.86 110.38 96h67.24c7.85-54.14 54.1-96 110.38-96s102 41.93 109.84 96H624a16 16 0 0016-16v-32a16 16 0 00-16-16zm-416-80a112 112 0 11112-112 111.94 111.94 0 01-112 112zm352-16H416V144h44.1l99.9 99.9z"
      className="shipping-timed_svg__fa-primary"
    />
  </svg>
);

SvgShippingTimed.displayName = "SvgShippingTimed";
SvgShippingTimed.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShippingTimed;
