import Account from "./Account";
import Button from "./Button";

const user = "";

function Nav() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-12 py-4 sm:py-4">
      <p className="text-lg font-medium hidden sm:block">
        {user ? "Welcome back, Masud" : "Login to get started"}
      </p>

      <img className="w-10 sm:w-12" src="./logo.png" alt="" />

      {user ? <Account /> : <Button type="auth">Sign in</Button>}
    </nav>
  );
}

export default Nav;
