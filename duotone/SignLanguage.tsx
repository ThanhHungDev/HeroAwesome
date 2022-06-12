import * as React from "react";

const SvgSignLanguage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M448 256.2l-5-152.45a28.57 28.57 0 10-57.11 1.87l1.24 38.4L283.56 11a28.57 28.57 0 00-39.65-5.33c-12.83 9.6-14.93 28.24-5.08 40.88l76.88 98.75-4.5 3.51-94.79-121.7a28.57 28.57 0 00-39.66-5.32c-12.82 9.6-14.93 28.24-5.08 40.88L266.12 184l-4.51 3.51-77.67-99.8a28.6 28.6 0 00-39.66-5.33c-12.82 9.6-14.93 28.24-5.08 40.89l57.56 72.83a28.58 28.58 0 0131.47 1.42l123.36 89.71A34.29 34.29 0 01365.71 315v23l69.07-53.62A34.31 34.31 0 00448 256.2zm-259.68-52.38a28 28 0 013.63-4.1l-18.2-22.79c-9.84-12.64-28.43-15.17-40.88-5.08a28.56 28.56 0 00-4.55 39.75l42.76 54.74h54.63l-31.09-22.61a28.55 28.55 0 01-6.3-39.91z"
      opacity={0.4}
    />
    <path
      d="M365.71 315v141.07a34.28 34.28 0 01-26.43 33.37l-80.47 18.93A136.78 136.78 0 01227.4 512H120a28.57 28.57 0 01-28.57-28c-.31-16 13.11-29.13 29.13-29.13h62.3v-5.72H57C41 449.16 27.56 436 27.86 420a28.57 28.57 0 0128.57-28h126.43v-5.71H29.14c-16 0-29.44-13.12-29.13-29.13a28.56 28.56 0 0128.56-28h154.29v-5.71H57.71c-16 0-29.44-13.11-29.13-29.13a28.56 28.56 0 0128.56-28h168.57l-31.09-22.61a28.57 28.57 0 1133.61-46.21l123.36 89.71A34.29 34.29 0 01365.71 315z"
      className="sign-language_svg__fa-primary"
    />
  </svg>
);

SvgSignLanguage.displayName = "SvgSignLanguage";
SvgSignLanguage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSignLanguage;