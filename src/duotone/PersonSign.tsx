import * as React from "react";

const SvgPersonSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M144 0a48 48 0 1048 48 48.08 48.08 0 00-48-48zm357.5 66.6L321.08 1a16 16 0 00-20.5 9.6l-43.8 120.3a16 16 0 009.6 20.5l180.5 65.6a16 16 0 0020.5-9.6L511 87.1a15.93 15.93 0 00-9.52-20.5z"
      opacity={0.4}
    />
    <path
      d="M321 212l-47.8-16-49.3-49.3a63.47 63.47 0 00-45.2-18.8h-62.9a63.63 63.63 0 00-57.2 35.4L3.38 273.7a32 32 0 1057.2 28.6L80 263.6v54.8L64.08 476.8a32 32 0 0028.6 35c1.1.1 2.2.2 3.2.2a32.05 32.05 0 0031.8-28.8l13.2-131.2h15.3L192 423.5V480a32 32 0 0064 0v-56.5a64.27 64.27 0 00-6.7-28.6l-41.2-82.5v-91.2l20 20a65 65 0 0025 15.5l46.1 15.4-11.2 30.8a16 16 0 009.6 20.5l15 5.5a16 16 0 0020.5-9.6l46.19-126.87L334 176zM429.68 6.5l-15-5.5a16 16 0 00-20.5 9.6l-5.49 15 45.1 16.4 5.49-15a16 16 0 00-9.6-20.5z"
      className="person-sign_svg__fa-primary"
    />
  </svg>
);

SvgPersonSign.displayName = "SvgPersonSign";
SvgPersonSign.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPersonSign;
