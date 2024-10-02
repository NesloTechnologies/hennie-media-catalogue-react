import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import store from './state/media-catalogue.store';

import CDAddContainer from './cd/container/CDAddContainer';
import CDEditContainier from './cd/container/CDEditContainer';
import CDTableContainer from './cd/container/CDTableContainer';
import DVDAddContainer from './dvd/containers/DVDAddContainer';
import DVDEditContainer from './dvd/containers/DVDEditContainer';
import DVDTableContainer from './dvd/containers/DVDTableContainer';

import BookAdd from './book/add/BookAdd';
import BookEdit from './book/edit/BookEdit';
import BookTable from './book/table/BookTable';
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
    element: <DVDTableContainer />
  },
  {
    path: '/dvd/add',
    element: <DVDAddContainer />
  },
  {
    path: '/dvd/edit',
    element: <DVDEditContainer />
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
