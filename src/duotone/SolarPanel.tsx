import * as React from "react";

const SvgSolarPanel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M585.2 26.74A32.42 32.42 0 00553.06 0H86.93a32.42 32.42 0 00-32.14 26.74C-3.32 369.16 0 348.08 0 352c0 17.32 14.29 32 32.6 32h574.77c18.23 0 32.51-14.56 32.59-31.79.04-4.08 3.35 16.95-54.76-325.47zM259.83 64h120.33l9.77 96H250.06zm-75.17 256H71.09l19-112h106zM201 160H98.24l16.29-96h96.19zm32.82 160l11.4-112h149.6l11.4 112zM429.27 64h96.19l16.29 96H439zm26.06 256l-11.4-112h106l19 112z"
      opacity={0.4}
    />
    <path
      d="M432 448l-48 .05V416H256v32.21l-48 .05a16 16 0 00-16 16V496a16 16 0 0016 16l224-.26a16 16 0 0016-16V464a16 16 0 00-16-16zM380.16 64H259.83l-9.77 96h139.87zm161.59 96l-16.29-96h-96.19l9.73 96zm-146.93 48H245.17l-11.4 112h172.45zM90.1 208l-19 112h113.56l11.41-112zM210.72 64h-96.19l-16.29 96H201zM549.9 208h-106l11.4 112h113.61z"
      className="solar-panel_svg__fa-primary"
    />
  </svg>
);

SvgSolarPanel.displayName = "SvgSolarPanel";
SvgSolarPanel.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSolarPanel;
