function Button({ children }) {
  return (
    <button
      type="submit"
      className="w-full text-white bg-[#39b385] bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-2"
    >
      {children}
    </button>
  );
}

export default Button;
