import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Index from './pages';
import Error from './layout/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Index />,
        errorElement: <Error />,
      },
      {
        path: '/about',
        element: <p>about page</p>,
        errorElement: <Error />,
      },
      {
        path: '/projects',
        element: <p>projects page</p>,
        errorElement: <Error />,
      },
      {
        path: '/projects/:projectName',
        element: <p>projects page</p>,
        errorElement: <Error />,
      },
      {
        path: '/contact',
        element: <p>contact page</p>,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
