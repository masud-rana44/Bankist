import Movement from "./Movement";

function Movements() {
  return (
    <div className="mx-4 grid grid-cols-7 gap-8 mt-8 rounded-lg overflow-hidden">
      <div className="bg-white min-h-[450px] col-start-1 col-span-full md:col-span-4 divide-y divide-[#eee] overflow-auto">
        <Movement type="deposit" />
        <Movement type="withdrawal" />
        <Movement type="deposit" />
      </div>
    </div>
  );
}

export default Movements;
