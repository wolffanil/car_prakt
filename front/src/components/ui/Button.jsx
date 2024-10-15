function Button({ children, className, ...rest }) {
  return (
    <button
      className={`bg-gradient-to-r from-green-400 to-black text-white_main text-[28px] font-semibold py-2 px-6 rounded transform -skew-x-12 ${className} hover:scale-[105%] duration-300`}
      style={{ background: "linear-gradient(90deg, #55a630, #000)" }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
