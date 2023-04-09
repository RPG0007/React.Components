import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Forms } from './pages/Forms/index';

import './App.css';
import '../src/css-componenets/header-footer.css';
import '../src/css-componenets/homepage.css';
import { HomePage } from './pages/HomePage';

const App = () => {
  return (
    <div className="container">
      <div>
        <Header />
        <main className="main">
          <Routes>
            <Route path="React.Components/" element={<HomePage />} />
            <Route path="React.Components/about" element={<AboutPage />} />
            <Route path="React.Components/forms" element={<Forms />}></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default App;
