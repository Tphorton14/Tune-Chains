import React from "react";
// import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
          <a href="../login">Login</a>
          <a href="../dashboard">Dashboard</a>
          <a href="../audioeditor">Audio Editor</a>
      </nav>
    </div>
  );
};
export default Nav;

