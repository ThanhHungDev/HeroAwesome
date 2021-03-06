import * as React from "react";

const SvgDollyFlatbedEmpty = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M632 416H128V8c0-4.4-3.6-8-8-8H8C3.6 0 0 3.6 0 8v16c0 4.4 3.6 8 8 8h88v408c0 4.4 3.6 8 8 8h58.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-408 48c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm288 0c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" />
  </svg>
);

SvgDollyFlatbedEmpty.displayName = "SvgDollyFlatbedEmpty";
SvgDollyFlatbedEmpty.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDollyFlatbedEmpty;
