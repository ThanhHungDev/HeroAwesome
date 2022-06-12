import * as React from "react";

const SvgUserMdChat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M512 0c-70.69 0-128 50.17-128 112 0 28.76 12.75 54.72 33.11 74.55a312.08 312.08 0 01-31.29 55.37 9.86 9.86 0 00-1.25 9.07c1.09 3.13 3.43 5 6.1 5 39.85 0 72.35-17.13 95.23-34.36A146 146 0 00512 224c70.7 0 128-50.14 128-112S582.7 0 512 0zm0 192a114.76 114.76 0 01-20.38-1.84l-13.78-2.5-11.18 8.42a155.47 155.47 0 01-26.13 16.07c2-4.08 4-8.35 5.91-12.79l8.87-20.28-15.87-15.45C428.75 153.24 416 135.83 416 112c0-44.11 43.06-80 96-80s96 35.89 96 80-43.06 80-96 80zm-194.31 96.1c-33.8-1-44.3 15.9-93.7 15.9s-59.79-16.9-93.59-15.9A134.33 134.33 0 000 422.4V504a8 8 0 008 8h16a8 8 0 008-8v-81.6c0-54.3 42.6-98.4 96-101.8v81.7a56 56 0 1032 0v-76.9a200.3 200.3 0 00128 0v68.8c-28.2 7.5-48 34.5-48 64.6V488a16.06 16.06 0 004.7 11.3l10.3 10.3a8 8 0 0011.3 0l11.3-11.3a8 8 0 000-11.3l-5.7-5.7V456a32.14 32.14 0 0137.4-31.6c15.7 2.6 26.6 17.4 26.6 33.3v23.6l-5.7 5.7a8 8 0 000 11.3l11.3 11.3a8 8 0 0011.3 0l10.3-10.3a16.06 16.06 0 004.7-11.3v-32a63.8 63.8 0 00-48-61.6v-73.7c53.4 3.4 96 47.5 96 101.8V504a8 8 0 008 8h16a8 8 0 008-8v-81.6a134 134 0 00-130.11-134.3zM168 456a24 24 0 11-24-24 24.06 24.06 0 0124 24zm56-200A128 128 0 1096 128a128 128 0 00128 128zm0-224a96 96 0 11-96 96 96.15 96.15 0 0196-96z" />
  </svg>
);

SvgUserMdChat.displayName = "SvgUserMdChat";
SvgUserMdChat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserMdChat;