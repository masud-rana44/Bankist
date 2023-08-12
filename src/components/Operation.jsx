function Operation() {
  return (
    <div className="bg-gradient-to-tl from-[#ffb003] to-[#ffcb03] px-8 py-6 flex flex-col rounded-lg">
      <h3 className="text-[17px] font-semibold text-[#333] mb-4">
        Transfer money
      </h3>
      <form className="flex items-center gap-3">
        <div className="flex-1 flex flex-col items-center gap-1">
          <input
            className="w-full bg-[#FFFFFF66] border-none focus:outline-none px-4 py-[3px] text-[15px] text-center rounded-md text-[#333]"
            id="acc"
            type="text"
          />
          <label className="text-[13px]" htmlFor="acc">
            Transfer to
          </label>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <input
            className="w-full bg-[#FFFFFF66] border-none focus:outline-none px-4 py-[3px] text-[15px] text-center rounded-md text-[#333]"
            id="amount"
            type="number"
          />
          <label className="text-[13px]" htmlFor="amount">
            Amount
          </label>
        </div>
        <button
          className="bg-white border-none outline-none self-start px-5 py-[3px] text-[15px] rounded-md"
          type="submit"
        >
          →
        </button>
      </form>
    </div>
  );
}

export default Operation;

// <!-- OPERATION: LOAN -->
//           <div
//             class="bg-gradient-to-tl from-[#39b385] to-[#9be15d] px-8 py-6 flex flex-col rounded-lg"
//           >
//             <h3 class="text-[17px] font-semibold text-[#333] mb-4">
//               Request loan
//             </h3>
//             <form class="grid grid-cols-[2.5fr_1fr_2.5fr] gap-3">
//               <div class="flex-1 flex flex-col items-center gap-1">
//                 <input
//                   class="w-full bg-[#FFFFFF66] border-none focus:outline-none px-4 py-[3px] text-[15px] text-center rounded-md text-[#333]"
//                   id="amount"
//                   type="number"
//                 />
//                 <label class="text-[13px]" for="amount">Amount</label>
//               </div>
//               <button
//                 class="bg-white border-none outline-none self-start px-5 py-[3px] text-[15px] rounded-md"
//                 type="submit"
//               >
//                 →
//               </button>
//             </form>
//           </div>

//           <!-- OPERATION: CLOSE -->
//           <div
//             class="bg-gradient-to-tl from-[#e52a5a] to-[#ff585f] px-8 py-6 flex flex-col rounded-lg"
//           >
//             <h3 class="text-[17px] font-semibold text-[#333] mb-4">
//               Close account
//             </h3>
//             <form class="flex items-center gap-3">
//               <div class="flex-1 flex flex-col items-center gap-1">
//                 <input
//                   class="w-full bg-[#FFFFFF66] border-none focus:outline-none px-4 py-[3px] text-[15px] text-center rounded-md text-[#333]"
//                   id="acc"
//                   type="text"
//                 />
//                 <label class="text-[13px]" for="acc">Confirm user</label>
//               </div>
//               <div class="flex-1 flex flex-col items-center gap-1">
//                 <input
//                   class="w-full bg-[#FFFFFF66] border-none focus:outline-none px-4 py-[3px] text-[15px] text-center rounded-md text-[#333]"
//                   id="amount"
//                   type="number"
//                 />
//                 <label class="text-[13px]" for="amount">Confirm PIN</label>
//               </div>
//               <button
//                 class="bg-white border-none outline-none self-start px-5 py-[3px] text-[15px] rounded-md"
//                 type="submit"
//               >
//                 →
//               </button>
//             </form>
//           </div>
