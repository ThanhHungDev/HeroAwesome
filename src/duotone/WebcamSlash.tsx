import * as React from "react";

const SvgWebcamSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M146.93 81.8A223.54 223.54 0 01320 0c123.71 0 224 100.29 224 224a222.55 222.55 0 01-42.83 131.58l-50.63-39.13A160 160 0 00197.59 121zM320 96a127.67 127.67 0 00-97 44.54L261 170a79.87 79.87 0 0159-26 16 16 0 010 32 47.85 47.85 0 00-33.48 13.65L425.2 296.87A128 128 0 00320 96zM163.46 256.92l-66.53-51.41c-.5 6.11-.93 12.25-.93 18.49 0 76.19 38.12 143.39 96.23 183.85L143 438.6a32 32 0 00-15 27.14V480a32 32 0 0032 32h320a31.44 31.44 0 0010.7-2.16L327 383.3c-83.42 3.7-148.41-54.1-163.54-126.38z"
      opacity={0.4}
    />
    <path
      d="M636.64 480.55L617 505.82a16 16 0 01-22.45 2.8L6.18 53.9a16 16 0 01-2.81-22.45L23 6.18a16 16 0 0122.45-2.8L633.82 458.1a16 16 0 012.82 22.45z"
      className="webcam-slash_svg__fa-primary"
    />
  </svg>
);

SvgWebcamSlash.displayName = "SvgWebcamSlash";
SvgWebcamSlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWebcamSlash;
