import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function AppLayout() {
  return (
    <div className="bg-[#f3f3f3] text-[#444] font-poppins">
      <Nav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
