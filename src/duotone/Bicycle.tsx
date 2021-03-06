import * as React from "react";

const SvgBicycle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M255 304h-48.61a79.82 79.82 0 00-19.64-38.23L212.63 224A127.74 127.74 0 01255 304zm257-112a127.54 127.54 0 00-45.93 8.5l26.07 42a80.25 80.25 0 11-40.74 25.37l-26.09-42A128 128 0 10512 192zM201.3 352a80 80 0 11-56.2-110.14l26.21-42.34A128 128 0 10252 352z"
      opacity={0.4}
    />
    <path
      d="M495.83 339.45a16 16 0 0022 5.16l13.6-8.44a16 16 0 005.15-22L388.39 75.34A24 24 0 00368 64h-64a16 16 0 00-16 16v16a16 16 0 0016 16h50.65l14.9 24H256v-16a16 16 0 00-16-16h-87.46c-13.44 0-24.77 11-24.53 24.44A24 24 0 00152 152h48.73L99.6 315.37A24 24 0 00120 352h184a24 24 0 0020.41-11.37l86-138.86zM290.63 304H163.09l74.28-120h127.55z"
      className="bicycle_svg__fa-primary"
    />
  </svg>
);

SvgBicycle.displayName = "SvgBicycle";
SvgBicycle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBicycle;
