function Movement({ type }) {
  const backgroundStyle = {
    background:
      type === "deposit"
        ? "linear-gradient(to top left, #39b385, #9be15d)"
        : "linear-gradient(to top left, #e52a5a, #ff585f)",
  };

  return (
    <div className="flex items-center justify-between px-6 sm:px-12 py-6">
      <div className="flex items-center gap-4 sm:gap-6">
        <span
          style={backgroundStyle}
          className="uppercase text-xs font-medium px-2 py-[2px] rounded-full text-white"
        >
          8 Deposit
        </span>
        <span className="text-xs text-[#666]">01/08/2020</span>
      </div>
      <p className="text-lg sm:text-xl">1300,00 €</p>
    </div>
  );
}

export default Movement;
