function InputOperation({ label, type, id }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-1">
      <input
        className="w-full bg-[#FFFFFF66] border-none focus:outline-none px-4 py-[3px] text-[15px] text-center rounded-md text-[#333]"
        id={id}
        type={type}
      />
      <label className="text-[13px]" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default InputOperation;
