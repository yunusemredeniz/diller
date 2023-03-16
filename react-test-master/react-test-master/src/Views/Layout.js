import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Layout;
