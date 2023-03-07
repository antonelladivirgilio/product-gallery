import React from 'react';
import ReactDOM from 'react-dom/client';

import { Results } from './pages/Results';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';
import { ErrorBoundary } from './pages/ErrorBoundary';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Root, { rootLoader } from "./routes/root";

import { ProductsProvider } from './contexts/productsContext';

import { App } from './App';

import reportWebVitals from './reportWebVitals';
import './scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/items/*",
        element: <Results />,
        errorElement: <ErrorBoundary />,
      }, {
        path: "/items/:id",
        element: <ProductDetails />,
        errorElement: <ErrorBoundary />,
        // loader: rootLoader
      },
      {
        path: "*",
        element: <NotFound />,
        errorElement: <ErrorBoundary />,
        // loader: rootLoader
      },
    ],
    // loader: rootLoader
  }
]);

root.render(
  <React.StrictMode>
    <ProductsProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ProductsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
