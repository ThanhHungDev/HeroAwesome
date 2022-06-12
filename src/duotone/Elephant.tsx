import * as React from "react";

const SvgElephant = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M512 32.15h-72.65A63.9 63.9 0 10352 119.24v72.86a32 32 0 0028.78 31.83H408a8 8 0 018 8v16a8 8 0 01-8 8l-24 .12a64.06 64.06 0 01-64-64v-56.73a96 96 0 01-32-71.18 94.71 94.71 0 015.9-32H192c-106 0-192 86-192 191.94v112a16 16 0 0016 16h16V496a16 16 0 0016 16h64a16 16 0 0016-16V388.19C160.35 405.73 198.72 416 240 416s79.65-10.3 112-27.84V496a16 16 0 0016 16h64a16 16 0 0016-16V288.07h64c23.44 0 45.11-6.76 64-17.74v97.31A16.26 16.26 0 01560.14 384 16 16 0 01544 368.19v-.14c0-8.78-7.64-16-16.42-16H496a16 16 0 00-16 16 80.07 80.07 0 0088.36 79.54C610 443.34 640 405.14 640 363.32V160.11A128 128 0 00512 32.15zm16 128a16 16 0 1116-16 16 16 0 01-16 15.96z"
      opacity={0.4}
    />
    <path
      d="M528 128a16 16 0 1016 16 16 16 0 00-16-16zm-176 64.16v-72.88A63.89 63.89 0 01328.54 32l-34.64.16a94.77 94.77 0 00-5.9 32 96 96 0 0032 71.2v56.8A64.07 64.07 0 00379.74 256H408a8 8 0 008-8v-16a8 8 0 00-8-8h-27.22A32 32 0 01352 192.16z"
      className="elephant_svg__fa-primary"
    />
  </svg>
);

SvgElephant.displayName = "SvgElephant";
SvgElephant.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgElephant;