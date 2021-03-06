import * as React from "react";

const SvgJoint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M487.66 141.63C463.85 125 448 99.34 448 70.31V8a8 8 0 00-8-8h-48a8 8 0 00-8 8v66.4c0 43.69 24.56 81.63 60.34 106.7A83.55 83.55 0 01480 249.69V280a8 8 0 008 8h48a8 8 0 008-8v-30.31a131.49 131.49 0 00-56.34-108.06zm65.62-54.54A20.28 20.28 0 01544 70.31V8a8 8 0 00-8-8h-48a8 8 0 00-8 8v62.31c0 22 10.17 43.41 28.64 55.39a147.47 147.47 0 0167.36 124V280a8 8 0 008 8h48a8 8 0 008-8v-30.31a195.36 195.36 0 00-86.72-162.6z"
      opacity={0.4}
    />
    <path
      d="M360.89 352.05c-34.4.06-86.81.15-88.21.17l117.8 137.43A64 64 0 00439.07 512h88.45L409.57 374.4a64 64 0 00-48.68-22.35zM195 359A525 525 0 000 432a526.3 526.3 0 00278.94 80h88.57L254.79 380.49A65 65 0 00195 359zm421-7H432l118 137.65A64 64 0 00598.58 512H616a24 24 0 0024-24V376a24 24 0 00-24-24z"
      className="joint_svg__fa-primary"
    />
  </svg>
);

SvgJoint.displayName = "SvgJoint";
SvgJoint.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgJoint;
