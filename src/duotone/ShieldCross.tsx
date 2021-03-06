import * as React from "react";

const SvgShieldCross = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M192 501.06V224H8.76C34.6 361.89 113.71 459.21 192 501.06zM0 128c0 10.86.34 21.52 1 32h191V10.28L27.57 83.69C10.88 91.14 0 108.62 0 128zm420.43-44.31L256 10.28V160h191.08q.9-15.65.92-32c0-19.38-10.88-36.86-27.57-44.31zM256 501c66.65-36.25 155.84-126.92 183.48-277H256z"
      opacity={0.4}
    />
    <path
      d="M447.08 160a517.11 517.11 0 01-7.6 64H256v277c-5.06 2.75-10 5.2-14.77 7.33a42.07 42.07 0 01-34.46 0c-4.91-2.19-9.84-4.62-14.77-7.25V224H8.76A509.43 509.43 0 011 160h191V10.28l14.77-6.59a42.07 42.07 0 0134.46 0L256 10.28V160z"
      className="shield-cross_svg__fa-primary"
    />
  </svg>
);

SvgShieldCross.displayName = "SvgShieldCross";
SvgShieldCross.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgShieldCross;
