import * as React from "react";

const SvgDolly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M515.3 228.4L454.9 47.2a16 16 0 00-20.2-10.1l-183.4 61a16 16 0 00-10.1 20.2l53 159.4a145.7 145.7 0 0149.5 24.7l161.5-53.8a16 16 0 0010.1-20.2zM256 320a96 96 0 1096 96 96 96 0 00-96-96zm0 128a32 32 0 1132-32 32 32 0 01-32 32z"
      opacity={0.4}
    />
    <path
      d="M575.2 326.4L565 296a16 16 0 00-20.2-10.1l-181.38 60.49a127.12 127.12 0 0120.27 60.76L565 346.6a16 16 0 0010.2-20.2zM128 0H16A16 16 0 000 16v32a16 16 0 0016 16h88.9l81.49 244.57a127.23 127.23 0 0160.81-20.26L158.4 21.9A32 32 0 00128 0zm245.6 57.5l-60.7 20.1L346 177l60.7-20.1z"
      className="dolly_svg__fa-primary"
    />
  </svg>
);

SvgDolly.displayName = "SvgDolly";
SvgDolly.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDolly;
