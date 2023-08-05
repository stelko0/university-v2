import { Link } from "react-router-dom";
import { HOME_ROUTE, SETTINGS_ROUTE } from "../routes";

export const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <Link to={HOME_ROUTE}>Home</Link>
      <Link to={SETTINGS_ROUTE}>Settings</Link>
    </nav>
  );
};
