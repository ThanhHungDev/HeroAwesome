import * as React from "react";

const SvgSnowplow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M368 352a48 48 0 010 96H112a48 48 0 010-96h256m0-64H112a112 112 0 000 224h256a112 112 0 000-224z"
      opacity={0.4}
    />
    <path
      d="M120 376a23.94 23.94 0 10.12 0zm80 0a23.94 23.94 0 10.12 0zm160 0a23.94 23.94 0 10.12 0zm-80 0a23.94 23.94 0 10.12 0zm318.6 49.4a77.16 77.16 0 01-22.6-54.6V269.2a77.16 77.16 0 0122.6-54.6l36.7-36.7a16.06 16.06 0 000-22.6l-22.6-22.6a16.06 16.06 0 00-22.6 0l-36.7 36.7a141.23 141.23 0 00-41.4 99.9V288h-64v-50.9a64.23 64.23 0 00-5.2-25.2L364.5 29.1A48 48 0 00320.3 0H176a48 48 0 00-48 48v112h-16a48 48 0 00-48 48v90.78A111.63 111.63 0 01112 288h256a112 112 0 01101.22 64H512v18.7a141.23 141.23 0 0041.4 99.9l36.7 36.7a16.06 16.06 0 0022.6 0l22.6-22.6a16.06 16.06 0 000-22.6zM256 224l-64-64V64h117.8l68.6 160z"
      className="snowplow_svg__fa-primary"
    />
  </svg>
);

SvgSnowplow.displayName = "SvgSnowplow";
SvgSnowplow.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSnowplow;
