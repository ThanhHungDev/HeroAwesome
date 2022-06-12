import * as React from "react";

const SvgBullhorn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M544 448c0 9.22-7.08 32-32 32a32 32 0 01-20-7l-85-68a242.82 242.82 0 00-119-50.79V125.84a242.86 242.86 0 00119-50.79L492 7a31.93 31.93 0 0120-7c25 0 32 23.26 32 32z"
      opacity={0.4}
    />
    <path
      d="M544 184.88v110.24a63.47 63.47 0 000-110.24zM0 192v96a64 64 0 0064 64h33.7a243 243 0 00-2.18 32 253.32 253.32 0 0025.56 110.94c5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56A127.35 127.35 0 01223.51 384a121 121 0 014.41-32H256V128H64a64 64 0 00-64 64z"
      className="bullhorn_svg__fa-primary"
    />
  </svg>
);

SvgBullhorn.displayName = "SvgBullhorn";
SvgBullhorn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBullhorn;
