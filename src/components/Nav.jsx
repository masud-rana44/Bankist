import Account from "./Account"

function Nav() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-12 py-4 sm:py-4">
      <p className="text-lg font-medium hidden sm:block">Welcome back, Masud</p>

      <img className="w-10 sm:w-12" src="./img/logo.png" alt="" />

      <Account/>
    </nav>
  )
}

export default Nav