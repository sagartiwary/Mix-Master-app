import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Landing,
  About,
  Cocktail,
  Error,
  Newsletter,
  HomeLayout,
  SinglePageError,
} from './pages';
import { loader as landing } from './pages/Landing';
import { loader as singlePageLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singlePageLoader,
      },
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landing,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
