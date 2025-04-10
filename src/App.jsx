import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
import AppLayout from './layout/AppLayout';

// pages
import Index from './pages';
import About from './pages/About';

// error & loader
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
        element: <About />,
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
