import Button from "./Button";
import InputOperation from "./InputOperation";
import Operation from "./Operation";

function Operations() {
  return (
    <div className="col-start-1 col-span-full md:col-start-5 md:col-span-3 space-y-5">
      <Operation title="Transfer money">
        <form className="flex items-center gap-3">
          <InputOperation type="text" label="Transfer to" id="account" />
          <InputOperation type="number" label="Amount" id="amountTransfer" />
          <Button type="operation">&rarr;</Button>
        </form>
      </Operation>
      <Operation title="Request loan">
        <form className="grid grid-cols-[2.5fr_1fr_2.5fr] gap-3">
          <InputOperation type="number" label="Amount" id="amountLoan" />
          <Button type="operation">&rarr;</Button>
        </form>
      </Operation>
      <Operation title="Close account">
        <form className="flex items-center gap-3">
          <InputOperation type="text" label="Confirm user" id="user" />
          <InputOperation type="number" label="Confirm PIN" id="pin" />
          <Button type="operation">&rarr;</Button>
        </form>
      </Operation>
    </div>
  );
}

export default Operations;
