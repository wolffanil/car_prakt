import React from "react";

function SecondButton({ children, className, ...rest }) {
  return (
    <button
      className={`flex items-center justify-center rounded-[10px] bg-button_main text-[#1e1e1e] ${className} text-[20px] font-semibold`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default SecondButton;
