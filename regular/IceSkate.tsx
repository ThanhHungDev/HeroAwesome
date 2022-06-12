import * as React from "react";

const SvgIceSkate = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M568 416h-32c-4.4 0-8 3.6-8 8v16c0 13.3-10.7 24-24 24h-72v-48h16c35.3 0 64-28.7 64-64v-53c0-44.1-30-82.4-72.7-93.1L352 184V8c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v24h-99.7c-8.1 0-16.2 1.6-23.8 4.6L52.1 88C40 92.8 32 104.6 32 117.7V352c0 35.3 28.7 64 64 64v48H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h504c35.3 0 64-28.7 64-64v-24c0-4.4-3.6-8-8-8zM80 352V128.5l118.4-47.4c1.9-.8 3.9-1.1 5.9-1.1H304v48h-72c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h72v32h-72c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h82.1l113.5 28.4C449 257.7 464 276.9 464 299v53c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zm64 64h240v48H144v-48z" />
  </svg>
);

SvgIceSkate.displayName = "SvgIceSkate";
SvgIceSkate.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIceSkate;
