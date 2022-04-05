import { NavLink } from "react-router-dom";
import NavbarImg from "../assets/logo_full_color.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav class="fixed-nav-bar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <a class="left-logo">
            <img src={NavbarImg} sizes="(min-width: 750px) 1440px, 100vw" />
          </a>
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <a class="link" href="#">
              Inicio
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            <a class="link" href="#">
              Beneficios
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            <a class="link myButton" href="#">
              Login
            </a>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

