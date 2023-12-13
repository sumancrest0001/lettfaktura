import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux';
import { Provider } from 'react-redux';
const container = document.getElementById('root');
import { BrowserRouter } from 'react-router-dom';
// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>);
