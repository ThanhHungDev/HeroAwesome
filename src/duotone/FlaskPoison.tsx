import * as React from "react";

const SvgFlaskPoison = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 416 512" {...props}>
    <path
      d="M208 224c-61.86 0-112 39.4-112 88 0 29.87 19 56.17 48 72.08V416a16 16 0 0016 16h96a16 16 0 0016-16v-31.92c29-15.91 48-42.21 48-72.08 0-48.6-50.17-88-112-88zm-40 112a24 24 0 1124-24 24 24 0 01-24 24zm80 0a24 24 0 1124-24 24 24 0 01-24 24z"
      opacity={0.4}
    />
    <path
      d="M96 64h224a16 16 0 0016-16V16a16 16 0 00-16-16H96a16 16 0 00-16 16v32a16 16 0 0016 16zm208 105.05V96H112v72.12C45.61 202.85 0 271.88 0 352a207.15 207.15 0 0053.93 139.7 63.44 63.44 0 0047 20.3H315a64 64 0 0047.57-20.85A207.15 207.15 0 00416 356.67c1.71-79.95-44.8-151.49-112-187.62zm-32 215V416a16 16 0 01-16 16h-96a16 16 0 01-16-16v-31.92c-29-15.91-48-42.21-48-72.08 0-48.6 50.13-88 112-88s112 39.4 112 88c0 29.87-19 56.17-48 72.08z"
      className="flask-poison_svg__fa-primary"
    />
  </svg>
);

SvgFlaskPoison.displayName = "SvgFlaskPoison";
SvgFlaskPoison.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFlaskPoison;
