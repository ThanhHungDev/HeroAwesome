import * as React from "react";

const SvgSatelliteDish = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M346.588 455.906c8.313 8.391 6.907 22.797-3.5 28.391a233.01 233.01 0 01-274.913-40.5c-74.408-74.39-87.908-186.702-40.5-274.89a16.876 16.876 0 0115.219-8.906 18.519 18.519 0 0113.094 5.406l134.003 134 35.594-35.61c-.687-2.593-1.593-5-1.593-7.796a32 32 0 1132 32c-2.812 0-5.219-.906-7.812-1.594l-35.595 35.594zm-36.594 8.688L47.394 202c-30.72 74.094-14.126 161.703 43.376 219.202A199.692 199.692 0 00232.773 480c22.157 0 56.751-6.906 77.22-15.406zm202.004-152.89a8.09 8.09 0 01-8.094 8.203h-16a7.976 7.976 0 01-7.906-7.906c-4.094-152.797-127.316-276.296-280.1-280.093a7.925 7.925 0 01-7.907-7.906V8.095a8.076 8.076 0 018.188-8.093c170.003 4.297 307.507 141.796 311.82 311.702zm-96.096 0a8.116 8.116 0 01-8.125 8.203h-15.782a8.04 8.04 0 01-8-7.813c-3.594-99.796-84.314-179.999-184.223-183.999a8.098 8.098 0 01-7.781-8v-16a8.009 8.009 0 018.188-8.094c117.002 4.297 211.504 98.703 215.723 215.703z" />
  </svg>
);

SvgSatelliteDish.displayName = "SvgSatelliteDish";
SvgSatelliteDish.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSatelliteDish;