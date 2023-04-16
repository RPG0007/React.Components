import React from 'react';
import {
  Outlet,
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Forms } from './pages/Forms/index';

import './App.css';
import '../src/css-componenets/header-footer.css';
import '../src/css-componenets/homepage.css';
import { HomePage } from './pages/HomePage';
import ROUTES from 'date/routes';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

const Root = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
export default Root;
