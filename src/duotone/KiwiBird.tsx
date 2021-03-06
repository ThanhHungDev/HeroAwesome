import * as React from "react";

const SvgKiwiBird = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M144 410v54a16 16 0 01-16 16h-16a16 16 0 01-16-16v-73.69A190.9 190.9 0 00144 410zm432-186a112 112 0 01-102.62 111.61l72.54 136.05A16 16 0 00560 480a16.2 16.2 0 003.95-.5A16 16 0 00576 464V224zM208 415.32V464a16 16 0 0016 16h16a16 16 0 0016-16v-58.95a191 191 0 01-48 10.27z"
      opacity={0.4}
    />
    <path
      d="M464 112h-15.74a260.23 260.23 0 01-147.74-46.24q-6.09-4.22-12.52-7.94v-.13A191.08 191.08 0 00192 32C86 32 0 118 0 224s86 192 192 192a191.08 191.08 0 0096-25.69v-.2c2.83-1.61 5.61-3.28 8.33-5.05C342 355.33 393.58 336.1 448 336h16a112 112 0 000-224zm0 136a24 24 0 1124-24 24 24 0 01-24 24z"
      className="kiwi-bird_svg__fa-primary"
    />
  </svg>
);

SvgKiwiBird.displayName = "SvgKiwiBird";
SvgKiwiBird.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgKiwiBird;
