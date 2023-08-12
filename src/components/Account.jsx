import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Account() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <div className="flex gap-2 items-center">
      <div className="flex items-center gap-1">
        <span className="w-7 h-7 bg-gray-500 rounded-full uppercase p-2 font-medium text-sm text-white flex items-center justify-center">
          {user.displayName[0]}
        </span>
        <p className="font-medium">{user.displayName}</p>
      </div>
      <span
        className="material-symbols-outlined text-2xl font-medium cursor-pointer"
        onClick={handleLogout}
      >
        logout
      </span>
    </div>
  );
}

export default Account;
