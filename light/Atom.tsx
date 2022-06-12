import * as React from "react";

const SvgAtom = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M224 200a56 56 0 1056.001 56A56.069 56.069 0 00224 200zm0 80a24 24 0 1124-24 24.007 24.007 0 01-24 24zm188.724-24c15.563-20.266 26.72-40.625 31.907-60 6.031-22.61 3.937-43.422-6.063-60.188-18.219-30.5-60.345-42.968-113.503-38.437C301.815 37.812 265.564 0 224 0s-77.815 37.813-101.034 97.375c-53.189-4.531-95.315 7.922-113.503 38.438C-.568 152.577-2.662 173.39 3.37 196c5.188 19.375 16.344 39.734 31.907 60-15.563 20.266-26.72 40.625-31.907 60-6.031 22.61-3.937 43.422 6.063 60.188 15.844 26.5 49.595 39.515 93.034 39.515 6.375 0 13.5-1.14 20.25-1.703 23.25 59.922 59.595 98 101.284 98s78.033-38.078 101.284-98c6.75.563 13.875 1.703 20.25 1.703 43.408 0 77.19-13.015 93.003-39.515 10.031-16.766 12.125-37.579 6.094-60.188-5.188-19.375-16.344-39.734-31.907-60zM36.9 359.781c-5.531-9.297-6.437-21.25-2.594-35.5 3.687-13.719 11.595-28.406 22.314-43.297a400.696 400.696 0 0043.313 38.454 432.512 432.512 0 0012.594 63.937c-37.72 1.938-65.408-6.531-75.627-23.594zm59.533-85.047Q86.168 265.43 77.31 256q8.86-9.445 19.125-18.734c-.219 6.218-.469 12.39-.469 18.734s.25 12.516.47 18.734zm3.5-82.171a397.743 397.743 0 00-43.313 38.453c-10.72-14.891-18.627-29.578-22.314-43.297-3.843-14.25-2.937-26.203 2.626-35.5 9.219-15.469 32.72-23.985 65.158-23.985 3.312 0 6.906.282 10.437.453a431.64 431.64 0 00-12.594 63.875zm211.756-25.5c-8.375-5.329-16.876-10.579-25.813-15.547-6.438-3.578-12.844-6.907-19.282-10.141a338.669 338.669 0 0136.563-8.813c2.843 9.407 6.657 24.86 8.532 34.5zM224 32c24.063 0 49.533 26.031 68.19 69.969A407.595 407.595 0 00224 122.313a405.982 405.982 0 00-68.19-20.36C174.468 58.016 199.938 32 224 32zm-79.158 100.563a336.436 336.436 0 0136.532 8.812c-6.407 3.234-12.844 6.563-19.25 10.14-8.938 4.97-17.439 10.22-25.814 15.548 1.875-9.641 5.687-25.094 8.532-34.5zm-8.532 212.375c8.375 5.328 16.876 10.578 25.813 15.546 6.72 3.75 13.376 6.485 20.095 9.86a344.234 344.234 0 01-37.376 9.125 355.37 355.37 0 01-8.532-34.531zM224 480c-24.157 0-49.72-26.234-68.408-70.484A402.253 402.253 0 00224 389.203a402.253 402.253 0 0068.408 20.313C273.72 453.766 248.157 480 224 480zm79.158-100.547a341.688 341.688 0 01-37.344-9.11c6.719-3.374 13.375-6.109 20.063-9.859 8.937-4.968 17.469-10.218 25.844-15.53a366.201 366.201 0 01-8.563 34.5zm14.72-77.39a471.236 471.236 0 01-47.564 30.484 475.862 475.862 0 01-46.283 22.61 476.691 476.691 0 01-46.345-22.61 471.236 471.236 0 01-47.564-30.485c-1.375-14.718-2.156-30.078-2.156-46.062s.781-31.344 2.156-46.063a471.236 471.236 0 0147.564-30.484A477.448 477.448 0 01224 156.766a477.448 477.448 0 0146.314 22.687 471.236 471.236 0 0147.563 30.485c1.375 14.718 2.157 30.078 2.157 46.062s-.781 31.344-2.157 46.063zm28.063-173.829c32.407 0 55.907 8.516 65.158 23.97 5.531 9.312 6.437 21.25 2.594 35.5-3.689 13.733-11.595 28.405-22.314 43.312a396.104 396.104 0 00-43.313-38.454 435.368 435.368 0 00-12.563-63.875c3.5-.187 7.094-.453 10.438-.453zm5.625 109.032Q361.832 246.57 370.69 256q-8.86 9.445-19.125 18.734c.219-6.218.469-12.39.469-18.734s-.25-12.516-.47-18.734zm59.501 122.515c-10.156 17.063-37.844 25.531-75.595 23.563a432.076 432.076 0 0012.594-63.906 397.743 397.743 0 0043.313-38.454c10.72 14.891 18.625 29.579 22.314 43.297 3.843 14.25 2.937 26.203-2.626 35.5z" />
  </svg>
);

SvgAtom.displayName = "SvgAtom";
SvgAtom.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAtom;
