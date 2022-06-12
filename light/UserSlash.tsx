import * as React from "react";

const SvgUserSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M637 485.2L23 1.8C19.6-1 14.5-.4 11.8 3l-10 12.5C-1 19-.4 24 3 26.8l614 483.5c3.4 2.8 8.5 2.2 11.2-1.2l10-12.5c2.8-3.6 2.2-8.6-1.2-11.4zM320 32c52.9 0 96 43.1 96 96 0 35.9-20 66.9-49.3 83.3l26.8 21.1C426.4 209.3 448 171.2 448 128 448 57.3 390.7 0 320 0c-54 0-100 33.6-118.8 81l26.8 21.1C239.4 61.8 276.1 32 320 32zm176 448H144c-8.8 0-16-7.2-16-16v-41.6c0-56.5 45.9-102.4 102.4-102.4 6.1 0 13 1.4 21.7 4.4 21.3 7.4 43.4 11.1 65.8 11.4l-51.6-40.6c-17.5-5.7-26.8-7.2-35.9-7.2C156.2 288 96 348.2 96 422.4V464c0 26.5 21.5 48 48 48h352c11.9 0 22.6-4.5 30.9-11.6l-27-21.2c-1.2.3-2.5.8-3.9.8z" />
  </svg>
);

SvgUserSlash.displayName = "SvgUserSlash";
SvgUserSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserSlash;
