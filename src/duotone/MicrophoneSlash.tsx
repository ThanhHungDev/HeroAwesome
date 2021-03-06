import * as React from "react";

const SvgMicrophoneSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M436.61 306.45A127.25 127.25 0 00447 256v-48a16 16 0 0116-16h16a16 16 0 0116 16v48a174.58 174.58 0 01-19.54 80.47zM399 464h-56v-33.78a175.69 175.69 0 0034-8.08l-50.4-39c-6.71.4-13.41.87-20.35.2-55.85-5.45-98.74-48.63-111.18-101.85l-52-40.22v6.85c0 89.64 64 169.55 152 181.69V464H239a16 16 0 00-16 16v16a16 16 0 0016 16h160a16 16 0 0016-16v-16a16 16 0 00-16-16zm11.2-178a95.94 95.94 0 004.8-30V96a96 96 0 00-192 0v45.35z"
      opacity={0.4}
    />
    <path
      d="M2.37 31.45L22 6.18a16 16 0 0122.47-2.81L632.82 458.1a16 16 0 012.82 22.45L616 505.82a16 16 0 01-22.46 2.81L5.18 53.9a16 16 0 01-2.81-22.45z"
      className="microphone-slash_svg__fa-primary"
    />
  </svg>
);

SvgMicrophoneSlash.displayName = "SvgMicrophoneSlash";
SvgMicrophoneSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMicrophoneSlash;
