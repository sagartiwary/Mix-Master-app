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
import { loader as loading } from './pages/Landing';

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
      },
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: loading,
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
