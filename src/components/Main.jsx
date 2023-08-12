import Balance from "./Balance";
import Movements from "./Movements";
import Operations from "./Operations";

function Main() {
  return (
    <main className="w-full max-w-[1000px] mx-auto mt-8 mb-6">
      <Balance />
      <div className="mx-4 grid grid-cols-7 gap-8 mt-8 rounded-lg overflow-hidden">
        <Movements />
        <Operations />
      </div>
    </main>
  );
}

export default Main;
