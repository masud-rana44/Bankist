import Movement from "./Movement";

function Movements() {
  return (
    <div className="bg-white min-h-[450px] col-start-1 col-span-full md:col-span-4 divide-y divide-[#eee] overflow-auto">
      <Movement type="deposit" />
      <Movement type="withdrawal" />
      <Movement type="deposit" />
    </div>
  );
}

export default Movements;
