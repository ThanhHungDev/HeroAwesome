import * as React from "react";

const SvgSnooze = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M304 176v-32a16 16 0 00-16-16h-34.75l57.37-57.38A32 32 0 00320 48V32a32 32 0 00-32-32H184a16 16 0 00-16 16v32a16 16 0 0016 16h42.75l-57.37 57.38A32 32 0 00160 144v16a32 32 0 0032 32h96a16 16 0 0016-16zm144 96v-16a32 32 0 00-32-32h-96a16 16 0 00-16 16v32a16 16 0 0016 16h34.75l-57.37 57.38A32 32 0 00288 368v16a32 32 0 0032 32h104a16 16 0 0016-16v-32a16 16 0 00-16-16h-42.75l57.37-57.38A32 32 0 00448 272z"
      opacity={0.4}
    />
    <path
      d="M192 224H40a24 24 0 00-24 24v48a24 24 0 0024 24h50.44L8.08 412.66A32 32 0 000 433.92V480a32 32 0 0032 32h152a24 24 0 0024-24v-48a24 24 0 00-24-24h-50.44l82.36-92.66a32 32 0 008.08-21.26V256a32 32 0 00-32-32z"
      className="snooze_svg__fa-primary"
    />
  </svg>
);

SvgSnooze.displayName = "SvgSnooze";
SvgSnooze.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSnooze;
