import { useLocation, useNavigate } from "react-router-dom";
import Account from "./Account";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

function Nav() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    navigate(location.pathname === "/login" ? "signup" : "login");
  }

  return (
    <nav className="flex items-center justify-between px-4 sm:px-12 py-4 sm:py-4">
      <p className="text-lg font-medium hidden sm:block">
        {user
          ? `Welcome back, ${user.displayName.split(" ")[0]}`
          : "Login to get started"}
      </p>

      <img className="w-10 sm:w-12 mr-20" src="./logo.png" alt="" />

      {user ? (
        <Account />
      ) : (
        <Button type="auth" onClick={handleClick}>
          {location.pathname === "/login" ? "Sign up" : "Sign in"}
        </Button>
      )}
    </nav>
  );
}

export default Nav;
