import * as React from "react";

const SvgHourglassHalf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M284.92 384H99.06A187.69 187.69 0 0088 448h208a187.6 187.6 0 00-11.08-64zM192 208c40.83 0 75.86-33.2 92.92-80H99.08c17.06 46.8 52.1 80 92.92 80z"
      opacity={0.4}
    />
    <path
      d="M360 64a24 24 0 0024-24V24a24 24 0 00-24-24H24A24 24 0 000 24v16a24 24 0 0024 24c0 91 51 167.73 120.84 192C75 280.27 24 357 24 448a24 24 0 00-24 24v16a24 24 0 0024 24h336a24 24 0 0024-24v-16a24 24 0 00-24-24c0-91-51-167.73-120.84-192C309 231.73 360 155 360 64zm-64 384H88c0-77.46 46.2-144 104-144s104 66.52 104 144zM192 208c-57.79 0-104-66.52-104-144h208c0 77.46-46.2 144-104 144z"
      className="hourglass-half_svg__fa-primary"
    />
  </svg>
);

SvgHourglassHalf.displayName = "SvgHourglassHalf";
SvgHourglassHalf.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHourglassHalf;
