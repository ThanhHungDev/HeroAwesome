import * as React from "react";

const SvgMicrochip = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M368 0H144c-26.51 0-48 21.49-48 48v416c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zm16 464c0 8.822-7.178 16-16 16H144c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h224c8.822 0 16 7.178 16 16v416zm128-358v12a6 6 0 01-6 6h-18v6a6 6 0 01-6 6h-42V88h42a6 6 0 016 6v6h18a6 6 0 016 6zm0 96v12a6 6 0 01-6 6h-18v6a6 6 0 01-6 6h-42v-48h42a6 6 0 016 6v6h18a6 6 0 016 6zm0 96v12a6 6 0 01-6 6h-18v6a6 6 0 01-6 6h-42v-48h42a6 6 0 016 6v6h18a6 6 0 016 6zm0 96v12a6 6 0 01-6 6h-18v6a6 6 0 01-6 6h-42v-48h42a6 6 0 016 6v6h18a6 6 0 016 6zM30 376h42v48H30a6 6 0 01-6-6v-6H6a6 6 0 01-6-6v-12a6 6 0 016-6h18v-6a6 6 0 016-6zm0-96h42v48H30a6 6 0 01-6-6v-6H6a6 6 0 01-6-6v-12a6 6 0 016-6h18v-6a6 6 0 016-6zm0-96h42v48H30a6 6 0 01-6-6v-6H6a6 6 0 01-6-6v-12a6 6 0 016-6h18v-6a6 6 0 016-6zm0-96h42v48H30a6 6 0 01-6-6v-6H6a6 6 0 01-6-6v-12a6 6 0 016-6h18v-6a6 6 0 016-6z" />
  </svg>
);

SvgMicrochip.displayName = "SvgMicrochip";
SvgMicrochip.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrochip;
