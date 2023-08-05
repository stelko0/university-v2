import { About } from './pages/about/About';
import { Signin } from './pages/auth/Signin/Signin';
import { Home } from './pages/home/Home';
import { Settings } from './pages/settings/Settings';

export const HOME_ROUTE = '/';
export const SETTINGS_ROUTE = '/settings';
export const ABOUT_ROUTE = '/about';
export const SIGNIN_ROUTE = '/signin';

export default [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: SETTINGS_ROUTE,
    element: <Settings />,
  },
  {
    path: ABOUT_ROUTE,
    element: <About />,
  },
  {
    path: SIGNIN_ROUTE,
    element: <Signin />,
  },
];
