import * as React from "react";

const SvgStarshipFreighter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M560 223.654a16 16 0 0016-16V155.2a15.998 15.998 0 00-10.523-15.033l-254.15-92.603C255.578 27.506 193.61 25.59 139.222 49.15-4.095 111.223.014 256 .014 256S-4.34 400.665 139.222 462.85c54.389 23.558 116.356 21.644 172.105 1.586l16.328-5.95L227.18 335.68c-1.079.043-2.086.32-3.172.32a81.123 81.123 0 1177.494-61.086L390.755 384h41.249a47.888 47.888 0 0140.163 21.832l93.31-33.998A15.998 15.998 0 00576 356.801v-52.455a16 16 0 00-16-16H416.004v-64.692zM80.012 272a16 16 0 1116-16 16 16 0 01-16 16zm32 96a16 16 0 1116-16 16 16 0 01-16 16zm0-192a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M128.011 352a16 16 0 11-16-16 16 16 0 0116 16zm-16-208a16 16 0 1016 16 16 16 0 00-16-16zm-31.999 96a16 16 0 1016 16 16 16 0 00-16-16zm399.99 192a48.002 48.002 0 01-47.998 48h-63.999a48.02 48.02 0 01-37.155-17.61L227.18 335.68c-1.078.043-2.085.32-3.171.32a81.123 81.123 0 1177.494-61.086L390.755 384h41.249a48.002 48.002 0 0147.998 48zM256.008 256a32 32 0 10-32 32 32 32 0 0032-32z"
      className="starship-freighter_svg__fa-primary"
    />
  </svg>
);

SvgStarshipFreighter.displayName = "SvgStarshipFreighter";
SvgStarshipFreighter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgStarshipFreighter;
