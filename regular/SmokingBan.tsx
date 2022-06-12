import * as React from "react";

const SvgSmokingBan = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M112 320h106.2l-96-96H112c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16zm208.6-192c-15.6 0-28.6-11.2-31.4-25.9-.7-3.6-4-6.1-7.7-6.1h-16.2c-5 0-8.7 4.5-8 9.4 4.6 30.9 31.2 54.6 63.3 54.6 15.6 0 28.6 11.2 31.4 25.9.7 3.6 4 6.1 7.7 6.1h16.2c5 0 8.7-4.5 8-9.4-4.6-30.9-31.2-54.6-63.3-54.6zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.3-208-208 0-48.7 17-93.5 45.1-129L385 418.9C349.5 447 304.7 464 256 464zm33.9-208H384v32h-62.1l-32-32zm129 129l-65-65H400c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H257.9L127 93.1C162.5 65 207.3 48 256 48c114.7 0 208 93.3 208 208 0 48.7-17 93.5-45.1 129z" />
  </svg>
);

SvgSmokingBan.displayName = "SvgSmokingBan";
SvgSmokingBan.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSmokingBan;
