import * as React from "react";

const SvgDiploma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M608.64 47.56C603.02 38.01 591.58 32 579.27 32c-2.53 0-5.1.25-7.66.78L444.65 75.56A390.24 390.24 0 01320 96c-42.38 0-84.48-6.9-124.65-20.44L68.39 32.78c-2.56-.53-5.13-.78-7.65-.78-12.31 0-23.75 6.01-29.38 15.56-41.81 70.94-41.81 217.95 0 288.89C36.99 345.99 48.42 352 60.74 352c2.53 0 5.09-.25 7.65-.78l126.96-42.78c4.29-1.45 8.74-2.3 13.08-3.56l-56.23 94.79a31.992 31.992 0 00-.29 32.16 32.007 32.007 0 0027.81 16.16h20.2l15.61 19.81a32.009 32.009 0 0025.13 12.19c11.56 0 22.23-6.24 27.9-16.32l51.47-91.57 51.53 91.5a32.004 32.004 0 0053.03 4.1l15.52-19.71 20.35-.01a31.997 31.997 0 0027.49-48.35l-56.3-94.73c4.32 1.25 8.73 2.1 13 3.54l126.96 42.78c2.56.53 5.13.78 7.66.78 12.31 0 23.75-6.01 29.38-15.55 41.8-70.94 41.8-217.95-.01-288.89zM185.13 278.11L60.74 320.03V320c-.8 0-1.45-.16-1.75-.16-.16 0-.23.05-.16.2-35.92-61.18-35.89-195.18-.53-255.43.15-.12.87-.51 2.82-.51l124.02 41.79c17.99 6.06 36.34 10.58 54.87 14.15v131.62l-8.35 14.07c-15.68 3.34-31.25 7.23-46.53 12.38zM424.56 416l-25.12 31.91L320 306.84 240.66 448l-25.22-32h-35.72L272 260.44v-135.5c15.91 1.82 31.9 3.07 48 3.07s32.09-1.25 48-3.07v135.5l92.44 155.55-35.88.01zm157.14-96.61c-.15.11-.87.5-2.83.5l-124-41.79c-15.27-5.14-30.83-9.04-46.5-12.38L400 251.65v-131.6c18.52-3.58 36.88-8.09 54.87-14.15L579.18 64h.09c.8 0 1.45.16 1.75.16.16 0 .22-.05.16-.2 35.91 61.18 35.88 195.19.52 255.43z" />
  </svg>
);

SvgDiploma.displayName = "SvgDiploma";
SvgDiploma.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDiploma;