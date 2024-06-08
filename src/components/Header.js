import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="routemateLogo" />
        <span>RouteMate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/Products" className="link">
          Product
        </NavLink>
        <NavLink to="/Contact" className="link">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
