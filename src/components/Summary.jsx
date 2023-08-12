function Summary() {
  return (
    <div className="flex basis-[100%] xl:basis-[55%] items-center justify-between lg:gap-24 xl:gap-8 md:gap-8 gap-4 font-medium">
      <div className="flex flex-1 items-end justify-between">
        <p>
          IN
          <span className="text-lg md:text-xl ml-1 text-[#66c873]">
            27 035,20 €
          </span>
        </p>
        <p>
          OUT
          <span className="text-lg md:text-xl ml-1 text-[#f5465d]">
            1082,61 €
          </span>
        </p>
        <p>
          INTEREST
          <span className="text-lg md:text-xl ml-1 text-[#66c873]">
            323,46 €
          </span>
        </p>
      </div>
      <button className="text-sm font-normal uppercase">↓Sort</button>
    </div>
  );
}

export default Summary;
