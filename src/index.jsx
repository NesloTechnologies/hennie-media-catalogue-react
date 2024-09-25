import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CDTable from './cd/table/CDTable';
import EditCD from './cd/edit/EditCD'
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
])

root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);
