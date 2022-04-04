import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="fixed-nav-bar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <a class="brand">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Poundexclam.svg/2000px-Poundexclam.svg.png" />
                Home
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <a class="link" href="#">
                Users
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              <a class="link" href="#">
                Personas
              </a>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

