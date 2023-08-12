
function Account() {
  return (
    <div className="flex gap-2 items-center">
        <div className="flex items-center gap-1">
          <span
            className="w-7 h-7 bg-gray-500 rounded-full uppercase p-2 font-medium text-sm text-white flex items-center justify-center"
            >M</span
          >
          <p className="font-medium">Masud</p>
        </div>
        <span
          className="material-symbols-outlined text-2xl font-medium cursor-pointer"
        >
          logout
        </span>
      </div>
      )
}

export default Account