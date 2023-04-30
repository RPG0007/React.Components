import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
function entryClient(store) {
    ReactDOM.hydrateRoot(document.getElementById('root'), React.createElement(BrowserRouter, null,
        React.createElement(Provider, { store: store },
            React.createElement(App, null))));
}
entryClient(store);
