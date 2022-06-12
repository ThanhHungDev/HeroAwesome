import * as React from "react";

const SvgToiletPaperAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M464 0H144C82.14 0 32 85.96 32 192v172.07c0 41.12-9.8 62.77-31.17 126.87C-2.62 501.3 5.09 512 16.01 512h312.92c13.77 0 26-8.81 30.36-21.88 11.16-33.48 21.59-63.54 24.11-106.12H464c61.86 0 112-85.96 112-192S525.86 0 464 0zM352 192v172.07c0 46.83-9.67 75.79-21.9 112.45l-1.16 3.48H38.29c.54-1.61 1.08-3.18 1.61-4.72C55.44 429.55 64 404.37 64 364.07V192c0-94.29 42.16-160 80-160h258.14C371.93 66.39 352 125.18 352 192zm112 160c-37.84 0-80-65.71-80-160s42.16-160 80-160 80 65.71 80 160-42.16 160-80 160zm0-208c-13.25 0-24 21.49-24 48s10.75 48 24 48c13.26 0 24-21.49 24-48s-10.74-48-24-48z" />
  </svg>
);

SvgToiletPaperAlt.displayName = "SvgToiletPaperAlt";
SvgToiletPaperAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgToiletPaperAlt;
