import * as React from "react";

const SvgSlidersVSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352zM200 160h-40v-32c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v32H88c-13.2 0-24 10.8-24 24v48c0 13.2 10.8 24 24 24h40v116c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V256h40c13.2 0 24-10.8 24-24v-48c0-13.2-10.8-24-24-24zm-8 64H96v-32h96v32zm168 32h-40V128c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v128h-40c-13.2 0-24 10.8-24 24v48c0 13.2 10.8 24 24 24h40v20c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12v-20h40c13.2 0 24-10.8 24-24v-48c0-13.2-10.8-24-24-24zm-8 64h-96v-32h96v32z" />
  </svg>
);

SvgSlidersVSquare.displayName = "SvgSlidersVSquare";
SvgSlidersVSquare.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSlidersVSquare;