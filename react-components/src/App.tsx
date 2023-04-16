import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import '../src/css-componenets/header-footer.css';
import '../src/css-componenets/homepage.css';
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
