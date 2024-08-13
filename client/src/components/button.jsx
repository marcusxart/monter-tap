import classNames from "classnames";
import React from "react";

/**
 * Button component renders a button element with provided text and additional properties.
 *
 * @param {Object} props
 * @param {string} [props.text]
 * @param {boolean} [props.sm]
 * @param {"primary" | "secondary"} [props.type]
 * @param {boolean} [props.full]
 * @param {boolean} [props.border]
 * @param {Object} [props.icon]
 * @param {"left" | "right"} [props.icon.position]
 * @param {React.ReactNode} [props.icon.element]
 * @param {Object} [props.restProps]
 * @returns {JSX.Element}
 */
const Button = ({ text, sm, type, full, border, icon, ...restProps }) => {
  const cn = classNames(
    "cursor-pointer text-[14px] flex items-center justify-center gap-[6px] px-[16px] whitespace-nowrap rounded-[8px] font-bold",
    { "flex-row": icon?.position !== "right" },
    { "flex-row-reverse": icon?.position == "right" },
    { "w-full": full },
    { "h-[40px] leading-[40px]": sm },
    { "h-[48px] leading-[48px]": !sm },
    { "border border-[#2C2E33] border-solid": border },
    { "bg-[#1E2025] text-white": type !== "secondary" },
    { "bg-[#E6E6E6] text-[#08090A]": type === "secondary" }
  );
  return (
    <button {...restProps} className={cn}>
      {icon?.element && icon?.element}
      {text ?? "text"}
    </button>
  );
};

export default Button;
