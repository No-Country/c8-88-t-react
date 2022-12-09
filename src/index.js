import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store/index.js"
import './db/index'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
