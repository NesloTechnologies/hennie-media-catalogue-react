import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import store from './state/media-catalogue.store';

import BookAdd from './book/add/BookAdd';
import BookEdit from './book/edit/BookEdit';
import BookTable from './book/table/BookTable';
import CDAddContainer from './cd/add/CDAddContainer';
import CDEditContainier from './cd/edit/CDEditContainer';
import CDTableContainer from './cd/table/CDTableContainer';
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
    element: <CDTableContainer />,
    errorElement: <ErrorPage />
  },
  {
    path: '/cd/add',
    element: <CDAddContainer />
  },
  {
    path: '/cd/edit',
    element: <CDEditContainier />
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
    path: '/book/table',
    element: <BookTable />
  },
  {
    path: '/book/add',
    element: <BookAdd />
  },
  {
    path: '/book/edit',
    element: <BookEdit />
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
