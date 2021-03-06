import * as React from "react";

const SvgMicrophoneAltSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M437.52 306.66A127.18 127.18 0 00448 256v-48a16 16 0 0116-16h16a16 16 0 0116 16v48a174.64 174.64 0 01-19.69 80.76zm-26.38-20.46A95.78 95.78 0 00416 256h-43.79zM400 464h-56v-33.78a175.69 175.69 0 0034-8.08l-50.4-39c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85l-52-40.22v6.85c0 89.64 64 169.55 152 181.69V464H240a16 16 0 00-16 16v16a16 16 0 0016 16h160a16 16 0 0016-16v-16a16 16 0 00-16-16zm-69-240h85v-32h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H416v-32h-85.33c-5.89 0-10.67-3.58-10.67-8v-16c0-4.42 4.78-8 10.67-8H416a96 96 0 00-192 0v45z"
      opacity={0.4}
    />
    <path
      d="M3.37 31.45L23 6.18a16 16 0 0122.47-2.81L633.82 458.1a16 16 0 012.82 22.45L617 505.82a16 16 0 01-22.46 2.81L6.18 53.9a16 16 0 01-2.81-22.45z"
      className="microphone-alt-slash_svg__fa-primary"
    />
  </svg>
);

SvgMicrophoneAltSlash.displayName = "SvgMicrophoneAltSlash";
SvgMicrophoneAltSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrophoneAltSlash;
