import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AddCD from './cd/add/AddCD';
import EditCD from './cd/edit/EditCD';
import CDTable from './cd/table/CDTable';
import AddDVD from './dvd/add/AddDVD';
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
    path: '/cd/add',
    element: <AddCD />
  },
  {
    path: '/cd/edit',
    element: <EditCD />
  },
  {
    path: '/dvd/add',
    element: <AddDVD />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
