import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";

export const HOME_ROUTE = "/";
export const SETTINGS_ROUTE = "/settings";

export default [
  {
    path: HOME_ROUTE,
    element: <Home />,
  },
  {
    path: SETTINGS_ROUTE,
    element: <Settings />,
  },
];
