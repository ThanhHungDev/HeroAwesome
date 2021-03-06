import * as React from "react";

const SvgHeartbeat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M320.21 243.85l-49.7 99.4a16 16 0 01-28.9-.6l-56.9-126.3-30 71.7h-94.1l182.5 186.5a17.82 17.82 0 0025.7 0l182.61-186.5H342.31zM473.71 74l-2.4-2.5a131 131 0 00-187.39 0L256 100.05l-27.9-28.5a130.83 130.83 0 00-187.4 0L38.31 74c-48.7 49.8-50.8 129.1-7.3 182.1h102.41l35.89-86.2a16 16 0 0129.4-.4l58.21 129.3 49-97.9a16 16 0 0128.59 0l27.6 55.2H481c43.51-53.05 41.42-132.35-7.29-182.1z"
      opacity={0.4}
    />
    <path
      d="M451 288l-.1.05H342.31l-22.1-44.2-49.7 99.4a16 16 0 01-28.9-.6l-56.9-126.3-30 71.7H61V288l-29.95-31.95h102.37l35.89-86.2a16 16 0 0129.4-.4l58.21 129.3 49-97.9a16 16 0 0128.59 0l27.6 55.2H481z"
      className="heartbeat_svg__fa-primary"
    />
  </svg>
);

SvgHeartbeat.displayName = "SvgHeartbeat";
SvgHeartbeat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeartbeat;
