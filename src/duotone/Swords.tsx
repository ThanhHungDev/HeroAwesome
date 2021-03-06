import * as React from "react";

const SvgSwords = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M153.37 278.63L100 332l-24.69-24.69a16 16 0 00-22.62 0l-17.54 17.53a16 16 0 00-2.79 18.87l31.64 59-59.31 59.35a16 16 0 000 22.63l22.62 22.62a16 16 0 0022.63 0L109.25 448l59 31.64a16 16 0 0018.87-2.79l17.53-17.54a16 16 0 000-22.62L180 412l53.37-53.37zM496.79.14l-78.11 13.2-140 140 80 80 140-140 13.2-78.11A13.33 13.33 0 00496.79.14z"
      opacity={0.4}
    />
    <path
      d="M389.37 309.38l-296-296L15.22.14A13.32 13.32 0 00.14 15.22l13.2 78.11 296 296.05zm117.94 152.68L448 402.75l31.64-59a16 16 0 00-2.79-18.87l-17.54-17.53a16 16 0 00-22.63 0L307.31 436.69a16 16 0 000 22.62l17.53 17.54a16 16 0 0018.87 2.79l59-31.64 59.31 59.31a16 16 0 0022.63 0l22.62-22.62a16 16 0 00.04-22.63z"
      className="swords_svg__fa-primary"
    />
  </svg>
);

SvgSwords.displayName = "SvgSwords";
SvgSwords.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSwords;
