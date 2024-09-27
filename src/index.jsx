import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import BookAdd from './book/add/BookAdd';
import CDAdd from './cd/add/CDAdd';
import CDEdit from './cd/edit/CDEdit';
import CDTable from './cd/table/CDTable';
import DVDAdd from './dvd/add/DVDAdd';
import DVDEdit from './dvd/edit/DVDEdit';
import DVDTable from './dvd/table/DVDTable';
import ErrorPage from './error/ErrorPage';

import './stylesheet/styles.scss';

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
    element: <CDAdd />
  },
  {
    path: '/cd/edit',
    element: <CDEdit />
  },
  {
    path: '/dvd/table',
    element: <DVDTable />
  },
  {
    path: '/dvd/add',
    element: <DVDAdd />
  },
  {
    path: '/dvd/edit',
    element: <DVDEdit />
  },
  {
    path: '/book/table'
  },
  {
    path: '/book/add',
    element: <BookAdd />
  },
  {
    path: '/book/edit'
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
