function Balance() {
  return (
    <div className="mx-4 flex items-center justify-between">
      <div>
        <p className="text-xl sm:text-2xl font-medium">Current balance</p>
        <p className="text-sm sm:text-base text-[#888]">
          As of <span>09/08/2023, 00:34</span>
        </p>
      </div>
      <p className="text-3xl sm:text-5xl">0000 €</p>
    </div>
  );
}

export default Balance;
