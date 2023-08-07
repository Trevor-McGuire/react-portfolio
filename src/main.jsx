import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Connect from './pages/Connect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Skills',
        element: <Skills />,
      },
      {
        path: '/Education',
        element: <Education />,
      },
      {
        path: '/Experience',
        element: <Experience />,
      },
      {
        path: '/Connect',
        element: <Connect />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
