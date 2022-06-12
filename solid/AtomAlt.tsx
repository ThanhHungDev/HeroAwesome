import * as React from "react";

const SvgAtomAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400.88 256c47.5 76.33 66.251 155.128 22.25 199.128-41.44 41.423-115.895 29.188-199.132-22.61-83.581 52.033-157.85 63.892-199.132 22.61-44.002-44-25.251-122.798 22.25-199.128-47.501-76.33-66.252-155.127-22.25-199.128 44.001-43.938 122.785-25.22 199.116 22.25 76.315-47.5 155.115-66.266 199.148-22.25 44.002 44 25.266 122.799-22.25 199.128zM167.385 391.69c-26.079-21.485-50.36-43.891-79.19-78.86-24.86 47.234-30.423 84.688-18.079 97.048 12.391 12.39 49.924 6.781 97.27-18.188zM88.196 199.17a561.575 561.575 0 0179.175-79.126c-31.001-16.36-57.784-24.407-76.003-24.407-9.672 0-16.938 2.203-21.25 6.485-12.345 12.375-6.767 49.813 18.078 97.048zm234.743 56.845a511.444 511.444 0 00-98.926-99.424 511.229 511.229 0 00-98.94 99.424c25.907 34.016 54.11 64.782 98.925 98.923 34.064-25.953 64.799-54.126 98.94-98.923zM256.015 256a32.017 32.017 0 11-32.017-32.016A32.01 32.01 0 01256.015 256zm121.863-153.862c-4.312-4.297-11.578-6.484-21.25-6.484-18.204 0-45.002 8.031-76.003 24.39a563.575 563.575 0 0179.175 79.127c24.844-47.235 30.423-84.673 18.078-97.033zM359.8 312.83c-28.923 35.095-53.205 57.47-79.175 78.86 47.33 24.939 84.847 30.517 97.253 18.189 12.345-12.36 6.766-49.814-18.078-97.049z" />
  </svg>
);

SvgAtomAlt.displayName = "SvgAtomAlt";
SvgAtomAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAtomAlt;
