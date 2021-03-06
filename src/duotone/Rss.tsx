import * as React from "react";

const SvgRss = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M303.74 463.21c-8.35-154.6-132.18-278.59-286.95-286.95A16 16 0 000 192.25v48.07a16 16 0 0014.89 16c111.83 7.28 201.47 96.7 208.77 208.77a16 16 0 0016 14.89h48.07a16 16 0 0016-16.79zM16.5 32A16 16 0 000 48v48.08a16 16 0 0015.45 16c191.18 7.84 344.63 161.32 352.47 352.47a16 16 0 0016 15.45H432a16 16 0 0016-16.5C439.6 229.68 251.46 40.45 16.5 32z"
      opacity={0.4}
    />
    <path
      d="M0 416a64 64 0 1164 64 64 64 0 01-64-64z"
      className="rss_svg__fa-primary"
    />
  </svg>
);

SvgRss.displayName = "SvgRss";
SvgRss.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRss;
