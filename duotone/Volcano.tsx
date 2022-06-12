import * as React from "react";

const SvgVolcano = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M304.4 224h-96.8a32 32 0 00-25.2 12.31l-55.6 71L140 323.8c9.8 12.2 30.3 12.2 40.1 0a57.37 57.37 0 0144.1-21.6c17.2-1.5 33.6 7 44.8 20.1l31.6 36.8c9.8 11.4 29.2 11.4 39 0l45.1-52.6-55-70.2a32.2 32.2 0 00-25.3-12.3zM352 16a63.3 63.3 0 00-41.18 15.43 63.57 63.57 0 00-109.62 0A63.38 63.38 0 00160 16a64 64 0 1034.8 117.6L224 192h64l29.2-58.4A64 64 0 10352 16z"
      opacity={0.4}
    />
    <path
      d="M480 512H32.1c-26.4 0-41.5-30.1-25.6-51.2L127 307l-.24.31L140 323.8c9.8 12.2 30.3 12.2 40.1 0a57.37 57.37 0 0144.1-21.6c17.2-1.5 33.6 7 44.8 20.1l31.6 36.8c9.8 11.4 29.2 11.4 39 0l45.1-52.6 120.8 154.3c15.9 21.13.8 51.2-25.5 51.2z"
      className="volcano_svg__fa-primary"
    />
  </svg>
);

SvgVolcano.displayName = "SvgVolcano";
SvgVolcano.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVolcano;
