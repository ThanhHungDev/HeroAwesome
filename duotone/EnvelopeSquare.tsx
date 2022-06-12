import * as React from "react";

const SvgEnvelopeSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h352a48 48 0 0048-48V80a48 48 0 00-48-48zm-16 328a24 24 0 01-24 24H88a24 24 0 01-24-24V152a24 24 0 0124-24h272a24 24 0 0124 24z"
      opacity={0.4}
    />
    <path
      d="M224 320c-26.72.13-50.54-21.67-64.7-32C97.33 243 78 228.57 64 217.77V360a24 24 0 0024 24h272a24 24 0 0024-24V217.77c-14 10.8-33.33 25.24-95.28 70.2C275 298 250.88 320.13 224 320zm136-192H88a24 24 0 00-24 24v25.17c24.35 19 23.43 19.12 114.12 84.93 10.51 7.67 31.38 26.12 45.88 25.9 14.49.22 35.38-18.24 45.88-25.9 90.69-65.81 89.75-66 114.12-84.93V152a24 24 0 00-24-24z"
      className="envelope-square_svg__fa-primary"
    />
  </svg>
);

SvgEnvelopeSquare.displayName = "SvgEnvelopeSquare";
SvgEnvelopeSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgEnvelopeSquare;
