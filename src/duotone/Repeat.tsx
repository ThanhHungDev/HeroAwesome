import * as React from "react";

const SvgRepeat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M494.84 183.65a159 159 0 0117.16 72c0 88.23-71.77 160-160 160H170.07l34.51 32.42a24 24 0 01.54 34.47l-10.78 10.77a24 24 0 01-33.94 0l-92.68-92.65a24 24 0 010-33.94L160.4 274a24 24 0 0133.94 0l10.78 10.77a24 24 0 01-.54 34.47l-34.51 32.41H352a96 96 0 0087.62-135.2 23.77 23.77 0 014.73-26.63l12.18-12.19a24 24 0 0138.31 6.02z"
      opacity={0.4}
    />
    <path
      d="M67.65 321.52l-12.18 12.19a24 24 0 01-38.31-6A159 159 0 010 255.68c0-88.22 71.77-160 160-160h181.93l-34.51-32.41a24 24 0 01-.54-34.47L317.66 18a24 24 0 0133.94 0l92.68 92.69a24 24 0 010 33.94l-92.68 92.71a24 24 0 01-33.94 0l-10.78-10.77a24 24 0 01.54-34.47l34.51-32.42H160a96 96 0 00-87.62 135.21 23.78 23.78 0 01-4.73 26.63z"
      className="repeat_svg__fa-primary"
    />
  </svg>
);

SvgRepeat.displayName = "SvgRepeat";
SvgRepeat.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRepeat;
