import * as React from "react";

const SvgClub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 292a124 124 0 01-124 124c-41.36 0-77.55-20.54-100-51.69V272a16 16 0 00-16-16h-32a16 16 0 00-16 16v92.31C201.55 395.46 165.36 416 124 416a124 124 0 010-248c5.8 0 11.36.94 16.95 1.71a124 124 0 11230.1 0c5.59-.77 11.15-1.71 16.95-1.71a124 124 0 01124 124z"
      opacity={0.4}
    />
    <path
      d="M367.31 486.59A32 32 0 01336 512H176a32 32 0 01-13-61.3c52.19-23.2 60.91-38.9 61-75.61V272a16 16 0 0116-16h32a16 16 0 0116 16v103.09c.19 37.5 9.41 52.61 61 75.61a32.09 32.09 0 0118.31 35.89z"
      className="club_svg__fa-primary"
    />
  </svg>
);

SvgClub.displayName = "SvgClub";
SvgClub.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgClub;
