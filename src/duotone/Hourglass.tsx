import * as React from "react";

const SvgHourglass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M192 304c-57.8 0-104 66.54-104 144h208c0-77.48-46.21-144-104-144zm0-96c57.8 0 104-66.54 104-144H88c0 77.48 46.21 144 104 144z"
      opacity={0.4}
    />
    <path
      d="M360 64a24 24 0 0024-24V24a24 24 0 00-24-24H24A24 24 0 000 24v16a24 24 0 0024 24c0 91 51 167.73 120.84 192C75 280.27 24 357 24 448a24 24 0 00-24 24v16a24 24 0 0024 24h336a24 24 0 0024-24v-16a24 24 0 00-24-24c0-91-51-167.73-120.84-192C309 231.73 360 155 360 64zm-64 384H88c0-77.46 46.2-144 104-144s104 66.52 104 144zM192 208c-57.79 0-104-66.52-104-144h208c0 77.46-46.2 144-104 144z"
      className="hourglass_svg__fa-primary"
    />
  </svg>
);

SvgHourglass.displayName = "SvgHourglass";
SvgHourglass.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHourglass;
