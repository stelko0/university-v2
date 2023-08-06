import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import { TITLE_SUFFIX } from './config/config.ts';
import { useTitle } from 'react-use';

function App() {
  useTitle(TITLE_SUFFIX);
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;
