import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditCD from './cd/edit/EditCD';
import CDTable from './cd/table/CDTable';
import ErrorPage from './error/ErrorPage';

const root = createRoot(document.getElementById('root'));

//TODO: add DVDTable and BookTable routes once they have been created
const router = createBrowserRouter([
  {
    path: '/',
    element: <CDTable />,
    errorElement: <ErrorPage />
  },
  {
    path: '/edit-cd',
    element: <EditCD />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
