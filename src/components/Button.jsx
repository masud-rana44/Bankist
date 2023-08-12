function Button({ children, type, ...rest }) {
  if (type === "auth")
    return (
      <button
        className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
        {...rest}
      >
        {children}
      </button>
    );

  if (type === "operation")
    return (
      <button
        className="bg-white border-none outline-none self-start px-5 py-[3px] text-[15px] rounded-md"
        type="submit"
        {...rest}
      >
        {children}
      </button>
    );

  return (
    <button
      className="w-full text-white bg-[#39b385] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-2"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
