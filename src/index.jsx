import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import store from './state/media-catalogue.store';

import LoginContainer from './auth/container/Login.container';
import RegisterContainer from './auth/container/Register.container';
import BookAddContainer from './book/container/BookAdd.container';
import BookEditContainer from './book/container/BookEdit.container';
import BookTableContainer from './book/container/BookTable.container';
import CDAddContainer from './cd/container/CDAdd.container';
import CDEditContainier from './cd/container/CDEdit.container';
import CDTableContainer from './cd/container/CDTable.container';
import DVDAddContainer from './dvd/container/DVDAdd.container';
import DVDEditContainer from './dvd/container/DVDEdit.container';
import DVDTableContainer from './dvd/container/DVDTable.container';

import ErrorPage from './error/ErrorPage';

import './stylesheet/styles.scss';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginContainer />,
    errorElement: <ErrorPage />
  },
  {
    path: '/register',
    element: <RegisterContainer />,
    errorElement: <ErrorPage />
  },
  {
    path: '/cd/table',
    element: <CDTableContainer />,
    errorElement: <ErrorPage />
  },
  {
    path: '/cd/add',
    element: <CDAddContainer />
  },
  {
    path: '/cd/edit/:id',
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
    path: '/dvd/edit/:id',
    element: <DVDEditContainer />
  },
  {
    path: '/book/table',
    element: <BookTableContainer />
  },
  {
    path: '/book/add',
    element: <BookAddContainer />
  },
  {
    path: '/book/edit/:id',
    element: <BookEditContainer />
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
