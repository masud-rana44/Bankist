import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function AppLayout() {
  return (
    <div className="font-poppins">
      <Nav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
