import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './App.css';
import '../src/css-componenets/header-footer.css';
import '../src/css-componenets/homepage.css';
import Forms from 'pages/Forms/index';

class App extends Component {
  render() {
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
  }
}
export default App;
