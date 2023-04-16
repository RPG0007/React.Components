import ROUTES from 'date/routes';
import { AboutPage } from 'pages/AboutPage';
import { Forms } from 'pages/Forms';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './App.css';
import '../src/css-componenets/header-footer.css';
import '../src/css-componenets/homepage.css';
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { store } from 'store/store';
import Root from 'App';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path={ROUTES.MAIN} element={<Root />}>
      <Route index element={<HomePage />}></Route>
      <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
      <Route path={ROUTES.FORMS} element={<Forms />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;
const root = document.getElementById('root');
if (root)
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );

export default App;
