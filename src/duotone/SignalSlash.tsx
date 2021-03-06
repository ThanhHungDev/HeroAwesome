import * as React from "react";

const SvgSignalSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M290.71 192.91A16 16 0 01296 192h48a16 16 0 0116 16v38.47zM88 384H40a16 16 0 00-16 16v96a16 16 0 0016 16h48a16 16 0 0016-16v-96a16 16 0 00-16-16zm400-38.6V112a16 16 0 00-16-16h-48a16 16 0 00-16 16v171.57zm128 98.93V16a16 16 0 00-16-16h-48a16 16 0 00-16 16v366.5zM408 496a16 16 0 0016 16h48a15.72 15.72 0 0013-7.15l-77-59.5zm-128 0a16 16 0 0016 16h48a16 16 0 0016-16v-87.75l-80-61.83zM168 288a16 16 0 00-16 16v192a16 16 0 0016 16h48a16 16 0 0016-16V309.32L204.41 288z"
      opacity={0.4}
    />
    <path
      d="M636.63 480.54L617 505.81a15.77 15.77 0 01-14.93 5.77 14.47 14.47 0 01-2.07.42h-2.56a15.42 15.42 0 00-2.9-3.37L6.18 53.9a16 16 0 01-2.81-22.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.81 22.44z"
      className="signal-slash_svg__fa-primary"
    />
  </svg>
);

SvgSignalSlash.displayName = "SvgSignalSlash";
SvgSignalSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignalSlash;
