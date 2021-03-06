import * as React from "react";

const SvgUserInjured = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M306 30.48L240 80h102.51A127.7 127.7 0 00306 30.48zM80 299.7V512h128.26l-98.45-221.52A132.86 132.86 0 0080 299.7zM277.37 12a127.05 127.05 0 00-171.88 68h81.19z"
      opacity={0.4}
    />
    <path
      d="M256 416h-55.38l42.67 96H256a48 48 0 000-96zm96-288c0-5.48-.95-10.7-1.61-16H97.61c-.67 5.3-1.61 10.52-1.61 16a128 128 0 00256 0zm-38.4 160h-16.71a174 174 0 01-145.78 0h-7.37l42.67 96H256a80.09 80.09 0 0180 80 79.24 79.24 0 01-16.41 48H400a48 48 0 0048-48v-41.6A134.4 134.4 0 00313.6 288zM0 422.4V464a48 48 0 0048 48V320.24C18.88 344.89 0 381.26 0 422.4z"
      className="user-injured_svg__fa-primary"
    />
  </svg>
);

SvgUserInjured.displayName = "SvgUserInjured";
SvgUserInjured.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserInjured;
