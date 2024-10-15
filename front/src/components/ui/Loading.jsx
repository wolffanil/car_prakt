import React from "react";

function Loading({ className }) {
  return (
    <p className={`font-bold text-white_main text-[22px] ${className}`}>
      Загрзка...
    </p>
  );
}

export default Loading;
