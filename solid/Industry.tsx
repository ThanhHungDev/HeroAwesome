import * as React from "react";

const SvgIndustry = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z" />
  </svg>
);

SvgIndustry.displayName = "SvgIndustry";
SvgIndustry.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgIndustry;
