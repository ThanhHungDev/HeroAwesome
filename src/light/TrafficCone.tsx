import * as React from "react";

const SvgTrafficCone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M504 480h-23.02L294.54 11.52A18.284 18.284 0 00277.55 0h-43.11c-7.49 0-14.22 4.57-16.99 11.52L31.02 480H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h496c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM382.87 320H129.13l50.94-128h151.85l50.95 128zM243.75 32h24.5l50.94 128H192.81l50.94-128zM65.46 480l50.94-128h279.2l50.94 128H65.46z" />
  </svg>
);

SvgTrafficCone.displayName = "SvgTrafficCone";
SvgTrafficCone.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTrafficCone;
