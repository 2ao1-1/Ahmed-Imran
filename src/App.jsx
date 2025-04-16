import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
import AppLayout from './layout/AppLayout';

// pages
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectModal from './pages/ProjectModal';

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
        element: <Projects />,
        errorElement: <Error />,
        children: [
          {
            path: ':projectName',
            element: <ProjectModal />,
          },
        ],
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
