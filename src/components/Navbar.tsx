import { Link } from 'react-router-dom';
import { ABOUT_ROUTE, HOME_ROUTE, SETTINGS_ROUTE } from '../routes';

export const Navbar = () => {
  return (
    <nav className="bg-slate-500 text-white flex justify-between">
      <h1 className="sm:text-2xl font-bold px-4 flex items-center">
        University
      </h1>
      <ul className="flex items-center">
        <li className="text-xl font-semibold hover:bg-slate-600 p-3">
          <Link to={HOME_ROUTE}>Home</Link>
        </li>
        <li className="text-xl font-semibold hover:bg-slate-600 p-3">
          <Link to={SETTINGS_ROUTE}>Settings</Link>
        </li>
        <li className="text-xl font-semibold hover:bg-slate-600 p-3">
          <Link to={ABOUT_ROUTE}>About us</Link>
        </li>
      </ul>
    </nav>
  );
};
