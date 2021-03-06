import * as React from "react";

const SvgPig = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M560 192h-29.51a159.88 159.88 0 00-37.38-52.46L512 64h-32c-29.4 0-55.39 13.5-73 34.32-7.57-1.1-15.12-2.32-23-2.32H256c-94.82 0-160 78.88-160 160a159.75 159.75 0 0064 128v80a16 16 0 0016 16h64a16 16 0 0016-16v-48h128v48a16 16 0 0016 16h64a16 16 0 0016-16v-80.72A160.37 160.37 0 00511.28 352H560a16 16 0 0016-16V208a16 16 0 00-16-16zm-128 64a16 16 0 1116-16 16 16 0 01-16 16z"
      opacity={0.4}
    />
    <path
      d="M51.26 223.52a24 24 0 01-18.74-28.3C34.74 183.82 45.4 176 57 176h1a6 6 0 006-6v-20a6 6 0 00-6-6C29.5 144 4.1 164.4.47 192.62a54.64 54.64 0 00-.47 7.23A56.08 56.08 0 0056 256h40a155.05 155.05 0 013.37-32H56a23.63 23.63 0 01-4.74-.48zM432 224a16 16 0 1016 16 16 16 0 00-16-16z"
      className="pig_svg__fa-primary"
    />
  </svg>
);

SvgPig.displayName = "SvgPig";
SvgPig.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPig;
