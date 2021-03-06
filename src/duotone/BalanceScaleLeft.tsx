import * as React from "react";

const SvgBalanceScaleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M544 464v32a16 16 0 01-16 16H304a16 16 0 01-16-16V153.25a80.48 80.48 0 01-13-7.12l-142 47.63a16 16 0 01-20.26-10.08l-10.17-30.34a16 16 0 0110.08-20.26L241 90a79.06 79.06 0 01-1-10 80 80 0 0180-80c29.69 0 55.3 16.36 69.11 40.37L507 .84a16 16 0 0120.26 10.08l10.17 30.34a16 16 0 01-10.08 20.26l-132 44.26A79.94 79.94 0 01352 153.25V448h176a16 16 0 0116 16z"
      opacity={0.4}
    />
    <path
      d="M640 304c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C381.94 296.75 384 288.33 384 304c0 44.18 57.31 80 128 80s128-35.82 128-80zm-200-16l72-144 72 144zm-269.07-37.51c-17.65-35.29-68.19-35.36-85.87 0C-2.06 424.75 0 416.33 0 432c0 44.18 57.31 80 128 80s128-35.82 128-80c0-16.18 1.32-8.73-85.07-181.51zM56 416l72-144 72 144z"
      className="balance-scale-left_svg__fa-primary"
    />
  </svg>
);

SvgBalanceScaleLeft.displayName = "SvgBalanceScaleLeft";
SvgBalanceScaleLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBalanceScaleLeft;
