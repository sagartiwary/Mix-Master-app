import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Landing,
  About,
  Cocktail,
  Error,
  Newsletter,
  HomeLayout,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
