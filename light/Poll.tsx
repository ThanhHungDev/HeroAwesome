import * as React from "react";

const SvgPoll = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V80c0-8.82 7.18-16 16-16h352c8.82 0 16 7.18 16 16v352zM136 224h-16c-4.42 0-8 3.58-8 8v144c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V232c0-4.42-3.58-8-8-8zm96-96h-16c-4.42 0-8 3.58-8 8v240c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V136c0-4.42-3.58-8-8-8zm96 160h-16c-4.42 0-8 3.58-8 8v80c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-80c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgPoll.displayName = "SvgPoll";
SvgPoll.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPoll;
