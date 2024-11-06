import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GadgetProvider } from './components/context/GadgetContext';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import HelpSupport from './components/Support/HelpSupport';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />
      },
      {
        path: "/help-support",
        element: <HelpSupport />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GadgetProvider>
      <RouterProvider router={router} />
    </GadgetProvider>
  </StrictMode>,
);
