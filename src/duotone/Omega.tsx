import * as React from "react";

const SvgOmega = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 440v48a24 24 0 01-24 24H352a32 32 0 01-32-32v-42.92a57.66 57.66 0 014-21.08h164a24 24 0 0124 24zM24 416a24 24 0 00-24 24v48a24 24 0 0024 24h136a32 32 0 0032-32v-42.7a56.91 56.91 0 00-4.15-21.3z"
      opacity={0.4}
    />
    <path
      d="M56.61 416A254 254 0 010 256C0 104.82 131.74-16.18 286.45 1.77 399.19 14.85 492.12 104.36 509 216.6c11.41 75.72-10.75 146.23-53.64 199.4H324a63 63 0 0122.92-28.62A159.66 159.66 0 00416 256c0-99.51-91.32-178.1-194.56-156.36-62.49 13.16-112.1 65.08-123 128-11.3 65.36 17.46 125.15 65.68 159.07A66.53 66.53 0 01187.85 416H56.61z"
      className="omega_svg__fa-primary"
    />
  </svg>
);

SvgOmega.displayName = "SvgOmega";
SvgOmega.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgOmega;
