import * as React from "react";

const SvgBong = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M445.66 224.57l-62.22-62.23c-3.12-3.12-8.19-3.12-11.31 0l-11.31 11.31c-3.12 3.12-3.12 8.19 0 11.31l19.8 19.8-48.57 48.57c-12.91-13.79-27.58-25.91-44.04-35.44V32h24c4.42 0 8-3.58 8-8V8c0-4.42-3.58-8-8-8H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h24v185.9C38.67 251.11 0 312.97 0 384c0 43.81 14.8 84.07 39.52 116.35C45.34 507.96 54.73 512 64.31 512h255.37c9.58 0 18.97-4.04 24.79-11.65C369.21 468.07 384 427.8 384 384c0-39.04-11.99-75.08-32.03-105.35l51.26-51.26 19.8 19.8c3.12 3.12 8.19 3.12 11.31 0l11.31-11.31a7.994 7.994 0 00.01-11.31zm-333.62 21.02l15.96-9.24V32h128v204.34l15.96 9.24c29.93 17.34 52.83 43.73 66.35 74.41H45.69c13.52-30.68 36.42-57.07 66.35-74.4zM319.69 480l-254.76.89C43.38 452.77 32 419.26 32 384c0-10.88 1.46-21.54 3.63-32h312.75c2.17 10.46 3.63 21.12 3.63 32-.01 35.27-11.39 68.77-32.32 96z" />
  </svg>
);

SvgBong.displayName = "SvgBong";
SvgBong.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBong;
