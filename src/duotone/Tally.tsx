import * as React from "react";

const SvgTally = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M224 253.44V48a16 16 0 0116-16h32a16 16 0 0116 16v184.73zm-64 20.71V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v246.86zm256-82.85V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v164zm128-41.42V48a16 16 0 00-16-16h-32a16 16 0 00-16 16v122.59zM224 320.7V464a16 16 0 0016 16h32a16 16 0 0016-16V300zm256-82.85V464a16 16 0 0016 16h32a16 16 0 0016-16V217.14zM96 362.12V464a16 16 0 0016 16h32a16 16 0 0016-16V341.41zm256-82.85V464a16 16 0 0016 16h32a16 16 0 0016-16V258.56z"
      opacity={0.4}
    />
    <path
      d="M639.21 169.49a16 16 0 01-10.27 20.16L30.84 383.21a16 16 0 01-20.16-10.27L.79 342.51a16 16 0 0110.27-20.16l598.1-193.56a16 16 0 0120.16 10.27z"
      className="tally_svg__fa-primary"
    />
  </svg>
);

SvgTally.displayName = "SvgTally";
SvgTally.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTally;
