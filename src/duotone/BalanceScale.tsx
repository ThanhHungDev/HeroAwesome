import * as React from "react";

const SvgBalanceScale = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M544 464v32a16 16 0 01-16 16H112a16 16 0 01-16-16v-32a16 16 0 0116-16h176V153.25A80.06 80.06 0 01241.61 96H112a16 16 0 01-16-16V48a16 16 0 0116-16h144.36a79.28 79.28 0 01127.28 0H528a16 16 0 0116 16v32a16 16 0 01-16 16H398.39A80.06 80.06 0 01352 153.25V448h176a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M256 336c0-16.18 1.34-8.73-85-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75 0 320.33 0 336c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56zm512 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C381.94 328.75 384 320.33 384 336c0 44.18 57.31 80 128 80s128-35.82 128-80zm-200-16l72-144 72 144z"
      className="balance-scale_svg__fa-primary"
    />
  </svg>
);

SvgBalanceScale.displayName = "SvgBalanceScale";
SvgBalanceScale.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBalanceScale;
