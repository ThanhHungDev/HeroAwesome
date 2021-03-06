import * as React from "react";

const SvgToilet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M368 0H16A16 16 0 000 16v16a16 16 0 0016 16h352a16 16 0 0016-16V16a16 16 0 00-16-16zM136 64H88a8 8 0 00-8 8v16a8 8 0 008 8h48a8 8 0 008-8V72a8 8 0 00-8-8z"
      opacity={0.4}
    />
    <path
      d="M352 204.7V48H32v156.7C11.8 214.8 0 226.9 0 240a191.76 191.76 0 0086.8 160.5l-21.4 70.2A32 32 0 0096 512h192a32 32 0 0030.6-41.3l-21.4-70.2A191.76 191.76 0 00384 240c0-13.1-11.8-25.2-32-35.3zM80 72a8 8 0 018-8h48a8 8 0 018 8v16a8 8 0 01-8 8H88a8 8 0 01-8-8zm112 200c-77.1 0-139.6-14.3-139.6-32s62.5-32 139.6-32 139.6 14.3 139.6 32-62.5 32-139.6 32z"
      className="toilet_svg__fa-primary"
    />
  </svg>
);

SvgToilet.displayName = "SvgToilet";
SvgToilet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgToilet;
