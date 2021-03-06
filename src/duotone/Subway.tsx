import * as React from "react";

const SvgSubway = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M176 256a24 24 0 0024-24V120a24 24 0 00-24-24H72a24 24 0 00-24 24v112a24 24 0 0024 24zM376 96H272a24 24 0 00-24 24v112a24 24 0 0024 24h104a24 24 0 0024-24V120a24 24 0 00-24-24zm5 401.72L318 448H130l-63 49.72A8 8 0 0072 512h304a8 8 0 005-14.28z"
      opacity={0.4}
    />
    <path
      d="M130 448h188c68.4 0 130-44.19 130-96V96c0-53-63-96-128-96H128C64 0 0 43 0 96v256c0 52 61.82 96 130 96zm222-64a48 48 0 1148-48 48 48 0 01-48 48zM248 120a24 24 0 0124-24h104a24 24 0 0124 24v112a24 24 0 01-24 24H272a24 24 0 01-24-24zm-200 0a24 24 0 0124-24h104a24 24 0 0124 24v112a24 24 0 01-24 24H72a24 24 0 01-24-24zm48 168a48 48 0 11-48 48 48 48 0 0148-48z"
      className="subway_svg__fa-primary"
    />
  </svg>
);

SvgSubway.displayName = "SvgSubway";
SvgSubway.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSubway;
