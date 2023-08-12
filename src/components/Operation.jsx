function Operation({ children, title }) {
  const backgroundStyle = {
    background:
      title === "Request loan"
        ? "linear-gradient(to top left, #39b385, #9be15d)"
        : title === "Transfer money"
        ? "linear-gradient(to top left, #ffb003, #ffcb03)"
        : "linear-gradient(to top left, #e52a5a, #ff585f)",
  };

  return (
    <div
      style={backgroundStyle}
      className=" px-8 py-6 flex flex-col rounded-lg"
    >
      <h3 className="text-[17px] font-semibold text-[#333] mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default Operation;
