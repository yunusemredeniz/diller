import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="react-icons">React Icons</Link>
        </li>
        <li>
          <Link to="react-slick">React Slick</Link>
        </li>
        <li>
          <Link to="toastify">React Tostify</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
