import './Navigation.css';

import { NavLink } from "react-router-dom";

export default function Navigation() {
  return <nav className="navigation">
    <NavLink className={({ isActive }) =>
      isActive ? "active" : ""
    } to="/">Home</NavLink>
    <NavLink className={({ isActive }) =>
      isActive ? "active" : ""
    } to="/portfolio">Portfolio</NavLink>
  </nav>
}
