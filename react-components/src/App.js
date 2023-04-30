import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from 'pages/About';
import Main from 'pages/Main';
import NotFound404 from 'pages/NotFound404';
import './styles/style.css';
import ROUTES from 'types/routes';
import Forms from './pages/Forms/index';
import Root from './Root';
export const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: ROUTES.MAIN, element: React.createElement(Root, null) },
                React.createElement(Route, { index: true, element: React.createElement(Main, null) }),
                React.createElement(Route, { path: ROUTES.ABOUT, element: React.createElement(About, null) }),
                React.createElement(Route, { path: ROUTES.FORMS, element: React.createElement(Forms, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(NotFound404, null) })))));
};
