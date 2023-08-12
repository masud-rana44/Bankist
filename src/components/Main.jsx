import Balance from "./Balance";
import Movements from "./Movements";
import Operations from "./Operations";

function Main() {
  return (
    <main className="w-full max-w-[1000px] mx-auto mt-8 mb-6">
      <Balance />
      <Movements />
      <Operations />
    </main>
  );
}

export default Main;
