import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { store } from './store/store';
import { App } from './App';
export const render = (url, options) => {
    return ReactDOMServer.renderToPipeableStream(React.createElement(Provider, { store: store },
        React.createElement(StaticRouter, { location: url },
            React.createElement(App, null))), options);
};
